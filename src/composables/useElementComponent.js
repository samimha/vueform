import _ from 'lodash'
import { computed, toRefs, ref } from 'composition-api'
import useForm$ from './useForm$'
import useEl$ from './useEl$'
import useTheme from './useTheme'
import { mergeComponentClasses } from './../utils/mergeClasses'

const base = function(props, context, dependencies, options = {})
{
  const componentName = context.name
  const { defaultClasses: _defaultClasses } = toRefs(context.data)

  // =============== INJECT ===============

  const {
    form$
  } = useForm$(props, context)
  
  const {
    el$
  } = useEl$(props, context)

  const {
    theme
  } = useTheme(props, context)
  
  // ================ DATA =================

  /**
  * The default classes for the component defined by theme.
  * 
  * @type {object}
  * @private
  */
  const defaultClasses = ref(_defaultClasses.value)

  // ============== COMPUTED ===============

  /**
   * An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.
   * 
   * @type {object}
   * @private
   */
  const mergedClasses = computed(() => {
    let classes = _.merge({},
      // Default component classes
      defaultClasses.value,

      // Theme / form level overwrites
      theme.value.classes[componentName.value] || {},

      // Element level overwrites
      el$.value.overrideClasses[componentName.value] || {}
    )

    // Add classes defined by specific components
    if (options.addClasses) {
      options.addClasses.forEach((add) => {
        if (add[2].value) {
          classes = mergeComponentClasses(classes, {
            [add[0]]: typeof add[1] == 'object' ? add[1].value : classes[add[1]],
          })
        }
      })
    }

    // Add form's addClasses
    if (form$.value.options.addClasses[componentName.value] !== undefined) {
      classes = mergeComponentClasses(classes, form$.value.options.addClasses[componentName.value] || null)
    }

    // Add element's addClasses options
    classes = mergeComponentClasses(classes, el$.value.addClasses[componentName.value] || null)

    return classes
  })

  /**
   * An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.
   * 
   * @type {object}
   * @private
   */
  const classes = computed({
    get() {
      return mergedClasses.value
    },
    set(val) {
      schema.value.classes = val
    }
  })

  /**
   * Returns the components used by the parent element.
   * 
   * @type {object}
   */
  const components = computed(() => {
    return el$.value.components
  })

  /**
  * The class name of the components's outermost DOM.
  * 
  * @type {string}
  * @private
  */
  const mainClass = computed(() => {
    return _.keys(defaultClasses.value)[0]
  })

  return {
    el$,
    form$,
    theme,
    classes,
    components,
    mainClass,
    defaultClasses,
  }
}

export default base