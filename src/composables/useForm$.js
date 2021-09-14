import { inject } from 'composition-api'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * The root form component.
  * 
  * @type {component}
  */
  let form$ = inject('form$')

  return {
    form$,
  }
}

export default base