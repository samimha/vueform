import each from 'lodash/each'
import isEqual from 'lodash/isEqual'
import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import { computed, ref, toRefs, watch } from 'vue'
import checkDateFormat from '../../utils/checkDateFormat'

const base = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  const { name, type } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const parent = dependencies.parent
  const defaultValue = dependencies.defaultValue
  const dataPath = dependencies.dataPath
  const form$ = dependencies.form$
  const isObject = dependencies.isObject
  const isGroup = dependencies.isGroup
  const isList = dependencies.isList
  
  // ================ DATA =================
  
  /**
   * The initial value of the element.
   * 
   *
   * @type {any}
   * @private
   */
  const initialValue = ref(undefined)
  
  if (form$.value.isSync) {
    if (parent.value && parent.value.isMatrixType) {
      const row = name.value.split('_')[1]
      const col = name.value.split('_')[2]

      const rowValue = parent.value.resolvedRows[row].value
      const colValue = parent.value.resolvedColumns[col].value

      switch (parent.value.dataType) {
        case 'assoc':
          initialValue.value = get(form$.value.model, `${parent.value.dataPath}.${rowValue}`) === colValue
          break

        case 'array':
          initialValue.value = get(form$.value.model, `${parent.value.dataPath}.${rowValue}`).indexOf(colValue) !== -1
          break

        default:
          initialValue.value = get(form$.value.model, `${parent.value.dataPath}.${rowValue}.${colValue}`)
          break
      }
    } else {
      initialValue.value = get(form$.value.model, dataPath.value)
    }
  } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType || parent.value.isListType)) {
    initialValue.value = parent.value.value[name.value]
  }
  
  // ============== COMPUTED ===============
  
  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   *
   * @type {any}
   * @private
   */
  const internalValue = ref(defaultValue.value instanceof File ? defaultValue.value : cloneDeep(defaultValue.value))
  
  /**
   * The value of the element.
   *
   * @type {any}
   */
  const value = computed({
    get: options.value?.get || function () {
      let value
      
      if (form$.value.isSync) {
        if (parent.value && parent.value.isMatrixType) {
          const row = name.value.split('_')[1]
          const col = name.value.split('_')[2]

          const rowValue = parent.value.resolvedRows[row].value
          const colValue = parent.value.resolvedColumns[col].value

          const val = get(form$.value.model, `${parent.value.dataPath}.${rowValue}`)

          switch (parent.value.dataType) {
            case 'assoc':
              value = val === colValue
              break

            case 'array':
              value = val && val.indexOf(colValue) !== -1
              break

            default:
              value = val?.[colValue]
              break
          }
        } else {
          value = get(form$.value.model, dataPath.value)
        }
      } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType || parent.value.isListType)) {
        value = parent.value.value[name.value]
      } else {
        value = internalValue.value
      }
      
      return value !== undefined ? value : /* istanbul ignore next: value is never undefined if default is set */ (defaultValue.value instanceof File ? defaultValue.value : cloneDeep(defaultValue.value))
    },
    set: options.value?.set || function (val) {
      if (form$.value.isSync) {
        if (parent.value && parent.value.isMatrixType) {
          const row = name.value.split('_')[1]
          const col = name.value.split('_')[2]

          const rowValue = parent.value.resolvedRows[row].value
          const colValue = parent.value.resolvedColumns[col].value

          const oldValue = get(form$.value.model, `${parent.value.dataPath}.${rowValue}`)

          let newValue

          switch (parent.value.dataType) {
            case 'assoc':
              if (val) {
                newValue = colValue
              } else if (oldValue === colValue) {
                newValue = null
              }
              break

            case 'array':
              newValue = oldValue?.filter(v => v !== colValue) || []

              if (val) {
                newValue.push(colValue)
              }
              break

            default:
              newValue = {
                ...(oldValue || {}),
                [colValue]: val,
              }

              break
          }
          
          if (newValue !== undefined) {
            form$.value.updateModel(`${parent.value.dataPath}.${rowValue}`, newValue)
          }
        } else {
          form$.value.updateModel(dataPath.value, val)
        }
      } else if (parent.value && parent.value.isListType) {
        const newValue = parent.value.value.map((v, k) => k == name.value ? val : v)
        parent.value.update(newValue)
      } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType)) {
        parent.value.value = Object.assign({}, parent.value.value, {
          [name.value]: val,
        })
      } else {
        internalValue.value = val
      }
    },
  })
  
  /**
   * Intermediary value between element's value and field's `v-model`. It is required when we need to transform the value format between the element and its field.
   *
   * @type {any}
   */
  const model = computed({
    get()
    {
      return value.value
    },
    set(val)
    {
      value.value = val
    },
  })
  
  if (options.init === undefined || options.init !== false) {
    // If element's value was undefined initially (not found in v-model/data) then we need to set its value
    if (initialValue.value === undefined) {
      value.value = defaultValue.value instanceof File ? defaultValue.value : cloneDeep(defaultValue.value)
    }
  }
  
  /**
   * Whether the element has its default value.
   *
   * @type {boolean}
   */
  const isDefault = computed(() => {
    return isEqual(value.value, defaultValue.value)
  })

  // ============== WATCHERS ===============
  
  /* istanbul ignore next: type can not be changed on the fly */
  watch(type, () => {
    value.value = defaultValue.value instanceof File ? defaultValue.value : cloneDeep(defaultValue.value)
  })
  
  return {
    initialValue,
    internalValue,
    value,
    model,
    isDefault,
  }
}

const list = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  const {
    initialValue,
    internalValue,
    value,
    model,
    isDefault,
  } = base(props, context, dependencies, {
    init: false,
  })
  
  return {
    initialValue,
    internalValue,
    value,
    model,
    isDefault,
  }
}

const object = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  const {
    initialValue,
    internalValue,
    value,
    isDefault,
  } = base(props, context, dependencies, {
    init: false,
  })
  
  // ============ DEPENDENCIES =============
  
  const defaultValue = dependencies.defaultValue
  
  // ================ HOOKS ================
  
  /* istanbul ignore else */
  if (options.init === undefined || /* istanbul ignore next: init will always be false */ options.init !== false) {
    if (initialValue.value === undefined) {
      value.value = defaultValue.value
    } else {
      value.value = Object.assign({}, defaultValue.value, value.value)
    }
  }
  
  return {
    internalValue,
    value,
    isDefault,
  }
}

const group = function(props, context, dependencies, /* istanbul ignore next */ options = {})
{
  // ============ DEPENDENCIES =============
  
  const parent = dependencies.parent
  const dataPath = dependencies.dataPath
  const defaultValue = dependencies.defaultValue
  const children$Array = dependencies.children$Array
  const form$ = dependencies.form$
  const isObject = dependencies.isObject
  const isGroup = dependencies.isGroup
  const isList = dependencies.isList
  
  // ================ DATA =================
  
  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   *
   * @type {any}
   * @private
   */
  const internalValue = ref(cloneDeep(defaultValue.value))
  
  // ============== COMPUTED ===============
  
  const value = computed(options.value || {
    get()
    {
      let value

      if (form$.value.isSync) {
        value = dataPath.value ? (get(form$.value.model, dataPath.value) || {}) : form$.value.model
      } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType)) {
        value = parent.value.value
      } else {
        value = internalValue.value
      }
      
      // Filter out children values that parent has but not among group elements
      let childKeys = children$Array.value.reduce((all, child$) => {
        /* istanbul ignore else */
        if (!child$ || child$.isStatic) {
          return all
        }
        
        let keys = []
        
        if (!child$.flat) {
          keys.push(child$.name)
        } else {
          const addGroupKeys = (children$Array) => {
            children$Array.forEach((child$) => {
              if (!child$.isStatic && child$.flat) {
                addGroupKeys(child$.children$Array)
              } /* istanbul ignore else */ else if (!child$.isStatic) {
                keys.push(child$.name)
              }
            })
          }
          
          addGroupKeys(child$.children$Array)
        }
        
        return all.concat(keys)
      }, [])
      
      let tempValue = {}
      childKeys.forEach((key) => {
        /* istanbul ignore else */
        if (value[key] !== undefined) {
          tempValue[key] = value[key]
        }
      })
      value = tempValue
      
      return value !== undefined ? value : /* istanbul ignore next: will never reach, internalValue is assigned at the beginning */ cloneDeep(defaultValue.value)
    },
    set(val)
    {
      if (form$.value.isSync) {
        form$.value.updateModel(dataPath.value, val)
      } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType)) {
        parent.value.value = Object.assign({}, parent.value.value, val)
      } else {
        internalValue.value = val
      }
    },
  })

  const isDefault = computed(() => {
    return isEqual(value.value, defaultValue.value)
  })
  
  return {
    value,
    isDefault,
  }
}

const multilingual = function(props, context, dependencies)
{
  const {
    value,
    isDefault,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES =============
  
  const language = dependencies.language
  
  // ============== COMPUTED ===============
  
  const model = computed({
    get()
    {
      return value.value[language.value]
    },
    set(val)
    {
      value.value = Object.assign({}, value.value, {
        [language.value]: val,
      })
    },
  })
  
  return {
    value,
    model,
    isDefault,
  }
}

const date = function(props, context, dependencies)
{
  const { name } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const parent = dependencies.parent
  const valueDateFormat = dependencies.valueDateFormat
  const defaultValue = dependencies.defaultValue
  const dataPath = dependencies.dataPath
  const form$ = dependencies.form$
  const isObject = dependencies.isObject
  const isGroup = dependencies.isGroup
  const isList = dependencies.isList

  const moment = form$.value.$vueform.services.moment
  
  // ================= PRE =================
  
  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   *
   * @type {any}
   * @private
   */
  const internalValue = ref(defaultValue.value instanceof File ? /* istanbul ignore next: @todo:adam date type will never have file instance default value */ defaultValue.value : cloneDeep(defaultValue.value))
  
  const {
    value,
    initialValue,
    isDefault,
  } = base(props, context, dependencies, {
    value: {
      get()
      {
        let value
        
        if (form$.value.isSync) {
          value = get(form$.value.model, dataPath.value)
        } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType || parent.value.isListType)) {
          value = parent.value.value[name.value]
        } else {
          value = internalValue.value
        }
        
        return value !== undefined ? value : /* istanbul ignore next: can not be undefined @todo:adam can not be file */ (defaultValue.value instanceof File ? defaultValue.value : cloneDeep(defaultValue.value))
      },
      set(val)
      {
        // If the value is not a Date object check if it is matching the value format
        if (!isEmpty(val) && !(val instanceof Date) && valueDateFormat.value !== false) {
          checkDateFormat(valueDateFormat.value, val, moment)
        }
        
        val = val && val instanceof Date && valueDateFormat.value !== false
          ? moment(val).format(valueDateFormat.value)
          : val
        
        if (form$.value.isSync) {
          form$.value.updateModel(dataPath.value, val)
        } else if (parent.value && parent.value.isListType) {
          const newValue = parent.value.value.map((v,k) => k == name.value ? val : v)
          parent.value.update(newValue)
        } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType)) {
          parent.value.value = Object.assign({}, parent.value.value, {
            [name.value]: val,
          })
        } else {
          internalValue.value = val
        }
      },
    },
  })
  
  // ============== COMPUTED ===============
  
  const model = computed(() => {
    return value.value instanceof Date || !value.value ? value.value : moment(value.value, valueDateFormat.value).toDate()
  })
  
  return {
    value,
    model,
    initialValue,
    internalValue,
    isDefault,
  }
}

const dates = function(props, context, dependencies)
{
  const { name } = toRefs(props)
  
  // ============ DEPENDENCIES =============
  
  const parent = dependencies.parent
  const valueDateFormat = dependencies.valueDateFormat
  const defaultValue = dependencies.defaultValue
  const dataPath = dependencies.dataPath
  const form$ = dependencies.form$
  const isObject = dependencies.isObject
  const isGroup = dependencies.isGroup
  const isList = dependencies.isList

  const moment = form$.value.$vueform.services.moment
  
  // ================= PRE =================
  
  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   *
   * @type {any}
   * @private
   */
  const internalValue = ref(defaultValue.value instanceof File ? /* istanbul ignore next: @todo:adam date type will never have file instance default value */ defaultValue.value : cloneDeep(defaultValue.value))
  
  const {
    value,
    initialValue,
    isDefault,
  } = base(props, context, dependencies, {
    value: {
      get()
      {
        let value
        
        if (form$.value.isSync) {
          value = get(form$.value.model, dataPath.value)
        } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType || parent.value.isListType)) {
          value = parent.value.value[name.value]
        } else {
          value = internalValue.value
        }
        
        return value !== undefined ? value : /* istanbul ignore next: can not be undefined @todo:adam can not be file */ (defaultValue.value instanceof File ? defaultValue.value : cloneDeep(defaultValue.value))
      },
      set(val)
      {
        if (!Array.isArray(val)) {
          val = [val]
        }
        
        val = val.map((v) => {
          if (!isEmpty(v) && !(v instanceof Date) && valueDateFormat.value !== false) {
            checkDateFormat(valueDateFormat.value, v, moment)
          }
          
          return v && v instanceof Date && valueDateFormat.value !== false
            ? moment(v).format(valueDateFormat.value)
            : v
        })
        
        if (form$.value.isSync) {
          form$.value.updateModel(dataPath.value, val)
        } else if (parent.value && parent.value.isListType) {
          const newValue = parent.value.value.map((v, k) => k == name.value ? val : v)
          parent.value.update(newValue)
        } else if (parent.value && (parent.value.isObjectType || parent.value.isGroupType)) {
          parent.value.value = Object.assign({}, parent.value.value, {
            [name.value]: val,
          })
        } else {
          internalValue.value = val
        }
      },
    },
  })
  
  // ============== COMPUTED ===============
  
  const model = computed(() => {
    return value.value.map((v) => {
      return v instanceof Date || !v ? v : moment(v, valueDateFormat.value).toDate()
    })
  })
  
  return {
    value,
    model,
    initialValue,
    internalValue,
    isDefault,
  }
}

export {
  date,
  dates,
  multilingual,
  object,
  group,
  list,
}


export default base