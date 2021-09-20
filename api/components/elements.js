module.exports = {
  AddressElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      type: {
        required: 'true',
        default: 'address',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      provider: {
        required: 'false',
        default: 'google',
        types: [
          'string',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      required: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      embed: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      children$Array: {
        types: [
          'array,component',
        ],
        description: 'List of child element components.',
        default: '[children<component>]',
        private: true,
      },
      addressId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the input which contains the location autocomplete. Format: `address-{rand}`.',
        private: false,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      locationService: {
        types: [
          'class',
        ],
        description: 'The location service that&apos;s initalized once the component is mounted.',
        default: 'null',
        private: false,
      },
      location: {
        types: [
          'class',
        ],
        description: 'The raw location object of location provider (Google/Algolia).',
        default: 'null',
        private: false,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      children$: {
        types: [
          'object,Element',
        ],
        description: 'Child element components.',
        default: '{[name]:component}',
        private: false,
      },
      children: {
        types: [
          'object',
        ],
        description: 'Schema of child elements.',
        private: true,
      },
      fields: {
        types: [
          'object',
        ],
        description: 'Fields of the address. By default has the following `text` type elements: `address`, `address2`, `zip`, `city`, `state`, `country`.',
        private: true,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      defaultOptions: {
        types: [
          'object',
        ],
        description: 'Default options for flatpickr.',
        default: '{}',
        private: false,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      component: {
        description: 'Transforms an element `:type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `:type`',
          },
        },
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      updateFields: {
        description: 'Updates fields with address data.',
        params: {
          data: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing address data',
          },
        },
        private: false,
      },
      handleAddressChange: {
        description: 'Handles location service&apos;s address change.',
        params: {
          data: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing address data',
          },
          raw: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing raw address data (based on provider)',
          },
        },
        private: false,
      },
      initLocationService: {
        description: 'Initalizes location service.',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  ButtonElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'button',
        types: [
          'string',
        ],
        private: true,
      },
      buttonLabel: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      buttonType: {
        required: 'false',
        default: 'button',
        types: [
          'string',
        ],
        private: false,
      },
      buttonClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'function',
          'boolean',
        ],
        private: false,
      },
      loading: {
        required: 'false',
        default: 'false',
        types: [
          'function',
          'boolean',
        ],
        private: false,
      },
      href: {
        required: 'false',
        default: '',
        types: [
          'string',
        ],
        private: false,
      },
      target: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onClick: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      resets: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      submits: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      isButtonLabelComponent: {
        types: [
          'boolean',
        ],
        description: 'Whether the button&apos;s label is a component.',
        private: true,
      },
      button: {
        types: [
          'object',
        ],
        description: 'Attributes of the button.',
        private: true,
      },
      isLoading: {
        types: [
          'boolean',
        ],
        description: 'Whether the button is in loading state.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the button is disabled.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      handleClick: {
        description: 'Handles the button&apos;s click event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: 'event',
          },
        },
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'default': {
        description: 'Renders the button&apos;s label.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  CheckboxElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'checkbox',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
          'boolean',
          'number',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      trueValue: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
          'string',
          'number',
        ],
        private: false,
      },
      falseValue: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
          'string',
          'number',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      check: {
        description: 'Sets the toggle to `on` (`trueValue`).',
        returns: 'void',
        private: false,
      },
      uncheck: {
        description: 'Sets the toggle to `off` (`falseValue`).',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'default': {
        description: 'Renders a label for the checkbox.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  CheckboxgroupElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'checkboxgroup',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
    },
    data: {
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      disabledItems: {
        types: [
          'array',
        ],
        description: 'List of option keys to be disabled.',
        default: '[]',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      check: {
        description: 'Checks one or more checkboxes.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to check',
          },
        },
        private: false,
      },
      uncheck: {
        description: 'Unchecks one or more checkboxes.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to check',
          },
        },
        private: false,
      },
      checkAll: {
        description: 'Checks all checkboxes.',
        returns: 'void',
        private: false,
      },
      uncheckAll: {
        description: 'Unchecks all checkboxes.',
        returns: 'void',
        private: false,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disableAll: {
        description: 'Disables all items.',
        returns: 'void',
        private: false,
      },
      enableAll: {
        description: 'Enables all items.',
        returns: 'void',
        private: false,
      },
      disable: {
        description: 'Disables one item or more items.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to disable',
          },
        },
        private: false,
      },
      enable: {
        description: 'Disables one item or more disabled items.',
        returns: 'void',
        params: {
          values: {
            types: [
              'array',
              'string',
              'number',
            ],
            required: 'true',
            description: 'value(s) to enable',
          },
        },
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'checkbox': {
        description: 'Replaces the template for the checkbox field. Checkboxes are rendered by the [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component which has a default checkbox template. If the this slot is defined, the default template in [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component will be overridden with the content of this slot.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          id: {
            description: 'the `id` attribute of the checkbox field used by the default template',
            types: [
              'string',
            ],
          },
          name: {
            description: 'the `name` attribute of the checkbox field used by the default template',
            types: [
              'string',
            ],
          },
          isDisabled: {
            description: 'whether the checkbox is disabled',
            types: [
              'boolean',
            ],
          },
          classes: {
            description: 'an object containing the classes of [`CheckboxgroupCheckbox`](checkboxgroup-checkbox) component',
            types: [
              'object',
            ],
          },
        },
      },
    },
  },
  DateElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'date',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      displayFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      valueFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        private: false,
      },
      loadFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      date: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      time: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      seconds: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      hour24: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      min: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      max: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      displayDateFormat: {
        types: [
          'string',
        ],
        description: 'The display date format.',
        private: true,
      },
      valueDateFormat: {
        types: [
          'string',
        ],
        description: 'The format of date value.',
        private: true,
      },
      loadDateFormat: {
        types: [
          'string',
        ],
        description: 'The date format of the data the element being loaded with.',
        private: true,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  DatesElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'dates',
        types: [
          'string',
        ],
        private: true,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      range: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      displayFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      valueFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        private: false,
      },
      loadFormat: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'boolean',
        ],
        private: false,
      },
      mode: {
        required: 'false',
        default: 'multiple',
        types: [
          'string',
        ],
        private: false,
      },
      min: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      max: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'date',
        ],
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      displayDateFormat: {
        types: [
          'string',
        ],
        description: 'The display date format.',
        private: true,
      },
      valueDateFormat: {
        types: [
          'string',
        ],
        description: 'The format of date value.',
        private: true,
      },
      loadDateFormat: {
        types: [
          'string',
        ],
        description: 'The date format of the data the element being loaded with.',
        private: true,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  FileElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'file',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
        ],
        private: false,
      },
      embed: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      image: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      view: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      drop: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
        ],
        private: false,
      },
      clickable: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      auto: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      methods: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      endpoints: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      params: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      softRemove: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      url: {
        required: 'false',
        default: '/',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      file: {
        types: [
          'File',
          'object',
          'string',
        ],
        description: 'This equals to:<br>* the `File` object when a file is selected, but not uploaded yet<br>* an object containing temp file name and original name when it has only been temporarily uploaded<br>* the filename when the file has already been uploaded',
        default: 'null',
        private: false,
      },
      hasUploadError: {
        types: [
          'boolean',
        ],
        description: 'Whether the file uploader has any errors.',
        default: 'false',
        private: false,
      },
      base64: {
        types: [
          'string',
        ],
        description: 'The `base64` format of the file when [`:image`](#image) is `true` and file only has been selected, but hasn&apos;t been uploaded yet.',
        default: 'null',
        private: false,
      },
      progress: {
        types: [
          'number',
        ],
        description: 'The percentage of progress when the file is being temporarily uploaded (0-100).',
        default: '0',
        private: false,
      },
      preparing: {
        types: [
          'boolean',
        ],
        description: 'If the form is submitted and a temp file hasn&apos;t been uploaded yet, the element will enter into `preparing` state by setting this to `true`. When in `preparing` state the form submission process will be halted until all async functions hasn&apos;t been completed without any errors.',
        default: 'false',
        private: false,
      },
      previewLoaded: {
        types: [
          'boolean',
        ],
        description: 'Whether the preview file has been loaded by the browser when the file has already been uploaded or has only been selected.',
        default: 'false',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      removing: {
        types: [
          'boolean',
        ],
        description: 'Whether async file removing request is in progress.',
        private: false,
      },
      request: {
        types: [
          'object',
        ],
        description: 'The axios request when temp is being uploaded.',
        private: true,
      },
      axios: {
        types: [
          'object',
        ],
        description: 'The form&apos;s axios instance.',
        private: true,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      canDrop: {
        types: [
          'boolean',
        ],
        description: 'Whether `:drop` is enabled and browser supports dragging.',
        private: true,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      fileMethods: {
        types: [
          'object',
        ],
        description: 'An object containing `temp`, `remove` and `removeTemp` methods.',
        default: 'config.methods.file',
        private: true,
      },
      fileEndpoints: {
        types: [
          'object',
        ],
        description: 'An object containing `temp`, `remove` and `removeTemp` endpoints.',
        default: 'config.endpoints.file',
        private: true,
      },
      fileUrl: {
        types: [
          'string',
        ],
        description: 'URL to file using the [`:url`](#url) option without including the filename. If `url` is not defined it will default to `&apos;/&apos;`.',
        private: true,
      },
      stage: {
        types: [
          'number',
        ],
        description: 'The stage the file is at:<br>* `0`: file not selected<br>* `1`: file selected<br>* `2`: temp file uploaded<br>* `3`: file uploaded',
        private: false,
      },
      filename: {
        types: [
          'string',
        ],
        description: 'The original or stored name of the file.',
        private: false,
      },
      link: {
        types: [
          'string',
        ],
        description: 'The link to an uploaded file.',
        private: false,
      },
      preview: {
        types: [
          'string',
        ],
        description: 'The preview of the file when [`image`](#image) is `true`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.',
        private: false,
      },
      uploaded: {
        types: [
          'boolean',
        ],
        description: 'Whether the file has been uploaded.',
        private: false,
      },
      canRemove: {
        types: [
          'boolean',
        ],
        description: 'Whether the file can be removed.',
        private: false,
      },
      canUploadTemp: {
        types: [
          'boolean',
        ],
        description: 'Whether temporary file can be uploaded.',
        private: false,
      },
      canSelect: {
        types: [
          'boolean',
        ],
        description: 'Whether file can be selected.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating, element name or default file name if name is a number.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      uploading: {
        description: 'Whether a temp file is currently being uploaded.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending`, `debouncing`, `uploading` or `removing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      handleDrop: {
        description: 'Handles the `drop` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: '',
          },
        },
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      uploadTemp: {
        description: 'Upload temporary file (async).',
        returns: 'void',
        private: false,
      },
      remove: {
        description: 'Removes file (async):<br>* in stage `1`: sets the value to null<br>* in stage `2`: submit a request to `removeTemp` endpoint and sets the value to null<br>* in stage `3`: submits a request to `remove` endpoint and sets the value to null',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepare the element for submitting the form (async). It will upload temp file if it hasn&apos;t been uploaded yet and halts the submit process until its done without any errors.',
        returns: 'void',
        private: true,
      },
      loadPreview: {
        description: 'Helper method that sets the value of `previewLoaded` when an the preview img&apos;s `src` has been loaded by the browser.',
        returns: 'void',
        private: true,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      handleClick: {
        description: 'Handles file select button `click` event.',
        returns: 'void',
        private: true,
      },
      handleUploadTemp: {
        description: 'Handles `uploadTemp` event.',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: 'Handles `remove` event.',
        returns: 'void',
        private: true,
      },
      handleAbort: {
        description: 'Handles `abort` event.',
        returns: 'void',
        private: true,
      },
      handleError: {
        description: 'Handles `error` event.',
        returns: 'void',
        params: {
          message: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'error message',
          },
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async). File element will only validate for `min`, `max`, `between`, `size`, `mimetypes`, `mimes`, `dimensions`, `file`, `image`, `gt`, `gte`, `lt` and `lte` rules and only before the temporary files are uploaded.',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
      remove: {
        description: 'Remove event',
        params: {
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      error: {
        description: 'Error event',
        params: {
          message: {
            description: 'Message',
            types: [
              'string',
            ]
          },
          e: {
            description: 'Event',
            types: [
              'Event',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  GroupElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'group',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      schema: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      component: {
        description: 'Transforms an element `:type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `:type`',
          },
        },
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  HiddenElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'hidden',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      meta: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
    },
  },
  ListElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'list',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'array',
        ],
        private: false,
      },
      initial: {
        required: 'false',
        default: '1',
        types: [
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      order: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      orderBy: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      storeOrder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      sort: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      min: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        private: false,
      },
      max: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        private: false,
      },
      controls: {
        required: 'false',
        default: '{"add":true,"remove":true,"sort":true}',
        types: [
          'object',
        ],
        private: false,
      },
      object: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        private: false,
      },
      element: {
        required: 'false',
        default: 'null',
        types: [
          'object',
        ],
        private: false,
      },
      onAdd: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSort: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      children$Array: {
        types: [
          'array,component',
        ],
        description: 'List of child element components.',
        default: '[children<component>]',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      list: {
        types: [
          'HTMLElement',
        ],
        description: 'The DOM element containing list items.',
        private: true,
      },
      sortable: {
        types: [
          'object',
        ],
        description: 'The `Sortable.js` instance.',
        private: true,
      },
      sorting: {
        types: [
          'boolean',
        ],
        description: 'Whether the list is currently being sorted (an item is dragged).',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      children$: {
        types: [
          'object,Element',
        ],
        description: 'Child element components.',
        default: '{[name]:component}',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      hasAdd: {
        types: [
          'boolean',
        ],
        description: 'Whether adding new items is allowed. Will return `false` if the element is `:disabled` or have reached `:max` items. Can be disabled manually by setting [`:controls.add`](#controls) to `false`.',
        private: false,
      },
      hasRemove: {
        types: [
          'boolean',
        ],
        description: 'Whether remove items is allowed. Will return `false` if the element is `:disabled` or has <= `:min` items. Can be disabled manually by setting [`:controls.remove`](#controls) to `false`.',
        private: false,
      },
      hasSort: {
        types: [
          'boolean',
        ],
        description: 'Whether list items should be sortable. Can be enabled by setting [`:sort`](#sort) to `true`, but will return `false` if the element is `:disabled`.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      orderByName: {
        types: [
          'string',
        ],
        description: 'The name of the field which we should order by.',
        private: false,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      prototype: {
        types: [
          'object',
        ],
        description: 'The schema of a child element.',
        private: true,
      },
      isObject: {
        types: [
          'boolean',
        ],
        description: 'Whether childrens are objects.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      isSortable: {
        types: [
          'boolean',
        ],
        description: 'Whether the list is sortable. Can be enabled with `:sort="true"` option, but it will disabled if [`isDisabled`](#is-disabled) is `true`.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      childrenErrors: {
        types: [
          'array',
        ],
        description: 'The list of errors collected from children.',
        private: true,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      add: {
        description: 'Appends a new item.',
        returns: 'void',
        params: {
          value: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'value of the appended element (optional)',
          },
        },
        private: false,
      },
      remove: {
        description: 'Removes an items by its index.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'index of items to be removed',
          },
        },
        private: false,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      handleAdd: {
        description: 'Handles the `add` event.',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: 'Handles the `remove` event.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'index of child to be removed',
          },
        },
        private: true,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      component: {
        description: 'Transforms an element `:type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `:type`',
          },
        },
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      refreshOrderStore: {
        description: 'Sets the value of `storeOrder` fields within a list of items to match the order.',
        returns: 'void',
        params: {
          value: {
            types: [
              'array',
            ],
            required: 'true',
            description: 'list of items',
          },
        },
        private: true,
      },
      handleSort: {
        description: 'Handles `sort` event.',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: 'Sortable.js event',
          },
        },
        private: true,
      },
      initSortable: {
        description: 'Inits Sortable.js.',
        returns: 'void',
        private: true,
      },
      destroySortable: {
        description: 'Destroys Sortable.js.',
        returns: 'void',
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element and validates children (async).',
        returns: 'void',
        private: false,
      },
      validateValidators: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      validateChildren: {
        description: 'Validates every child (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
      add: {
        description: 'Add event',
        params: {
          addedValue: {
            description: 'Added value',
            types: [
              'any',
            ]
          },
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      remove: {
        description: 'Remove event',
        params: {
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      sort: {
        description: 'Sort event',
        params: {
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  LocationElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'location',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '{"country":null,"country_code":null,"state":null,"state_code":null,"city":null,"zip":null,"address":null,"formatted_address":null,"lat":null,"lng":null}',
        types: [
          'object',
        ],
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      displayKey: {
        required: 'false',
        default: 'formatted_address',
        types: [
          'string',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      provider: {
        required: 'false',
        default: 'google',
        types: [
          'string',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      locationService: {
        types: [
          'class',
        ],
        description: 'The location service that&apos;s initalized once the component is mounted.',
        default: 'null',
        private: false,
      },
      location: {
        types: [
          'class',
        ],
        description: 'The raw location object of location provider (Google/Algolia).',
        default: 'null',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      defaultOptions: {
        types: [
          'object',
        ],
        description: 'Default options for flatpickr.',
        default: '{}',
        private: false,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleAddressChange: {
        description: 'Handles location service&apos;s address change.',
        params: {
          data: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing address data',
          },
          raw: {
            types: [
              'object',
            ],
            required: 'false',
            description: 'an object containing raw address data (based on provider)',
          },
        },
        private: false,
      },
      handleLocationBlur: {
        description: '',
        private: true,
      },
      initLocationService: {
        description: 'Initalizes location service.',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  MultifileElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'multifile',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      image: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      view: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      initial: {
        required: 'false',
        default: '1',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      drop: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
        ],
        private: false,
      },
      order: {
        required: 'false',
        default: 'ASC',
        types: [
          'string',
        ],
        private: false,
      },
      orderBy: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      auto: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      file: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      storeFile: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      fields: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      sort: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      storeOrder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      object: {
        required: 'false',
        default: 'null',
        types: [
          'boolean',
        ],
        private: false,
      },
      onAdd: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onRemove: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSort: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      children$Array: {
        types: [
          'array,component',
        ],
        description: 'List of child element components.',
        default: '[children<component>]',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      list: {
        types: [
          'HTMLElement',
        ],
        description: 'The DOM element containing list items.',
        private: true,
      },
      sortable: {
        types: [
          'object',
        ],
        description: 'The `Sortable.js` instance.',
        private: true,
      },
      sorting: {
        types: [
          'boolean',
        ],
        description: 'Whether the list is currently being sorted (an item is dragged).',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      children$: {
        types: [
          'object,Element',
        ],
        description: 'Child element components.',
        default: '{[name]:component}',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      canDrop: {
        types: [
          'boolean',
        ],
        description: 'Whether `:drop` is enabled and browser supports dragging.',
        private: true,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      preparing: {
        types: [
          'boolean',
        ],
        description: 'Whether any of the file are preparing (being uploaded before submit).',
        private: false,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      orderByName: {
        types: [
          'string',
        ],
        description: 'The name of the field which we should order by.',
        private: false,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      storeFileName: {
        types: [
          'string',
        ],
        description: 'The `name` of the child element that stores the filename.',
        private: true,
      },
      isObject: {
        types: [
          'boolean',
        ],
        description: 'Whether childrens are objects.',
        private: true,
      },
      prototype: {
        types: [
          'object',
        ],
        description: 'The schema of a child element.',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      isSortable: {
        types: [
          'boolean',
        ],
        description: 'Whether the list is sortable. Can be enabled with `:sort="true"` option, but it will disabled if [`isDisabled`](#is-disabled) is `true`.',
        private: false,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      childrenErrors: {
        types: [
          'array',
        ],
        description: 'The list of errors collected from children.',
        private: true,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      add: {
        description: 'Appends a new item.',
        returns: 'void',
        params: {
          value: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'value of the appended element (optional)',
          },
        },
        private: false,
      },
      remove: {
        description: 'Removes an items by its index.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'index of items to be removed',
          },
        },
        private: false,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      handleAdd: {
        description: 'Handles the `add` event.',
        returns: 'void',
        private: true,
      },
      handleRemove: {
        description: 'Handles the `remove` event.',
        returns: 'void',
        params: {
          index: {
            types: [
              'number',
            ],
            required: 'true',
            description: 'index of child to be removed',
          },
        },
        private: true,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      handleDrop: {
        description: 'Handles the `drop` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: '',
          },
        },
        private: true,
      },
      component: {
        description: 'Transforms an element `:type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `:type`',
          },
        },
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      handleClick: {
        description: 'Handles `click` event.',
        returns: 'void',
        private: true,
      },
      refreshOrderStore: {
        description: 'Sets the value of `storeOrder` fields within a list of items to match the order.',
        returns: 'void',
        params: {
          value: {
            types: [
              'array',
            ],
            required: 'true',
            description: 'list of items',
          },
        },
        private: true,
      },
      handleSort: {
        description: 'Handles `sort` event.',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'false',
            description: 'Sortable.js event',
          },
        },
        private: true,
      },
      initSortable: {
        description: 'Inits Sortable.js.',
        returns: 'void',
        private: true,
      },
      destroySortable: {
        description: 'Destroys Sortable.js.',
        returns: 'void',
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element and validates children (async).',
        returns: 'void',
        private: false,
      },
      validateValidators: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      validateChildren: {
        description: 'Validates every child (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
      add: {
        description: 'Add event',
        params: {
          addedValue: {
            description: 'Added value',
            types: [
              'any',
            ]
          },
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      remove: {
        description: 'Remove event',
        params: {
          index: {
            description: 'Index',
            types: [
              'number',
            ]
          },
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
      sort: {
        description: 'Sort event',
        params: {
          value: {
            description: 'Value',
            types: [
              'array',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  MultiselectElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'multiselect',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
        ],
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      native: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      nativeItems: {
        types: [
          'array',
        ],
        description: 'Contains select options for native select.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      updateItems: {
        description: 'Fetches & updates select options when using `async` options.',
        returns: 'void',
        params: {
          shouldDisable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: 'whether the input field should be disabled while fetching options',
          },
        },
        private: false,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleSelect: {
        description: 'Handles `select` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Handles `deselect` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Handles `searchChange` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Handles `open` event.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Handles `close` event.',
        returns: 'void',
        private: true,
      },
      handleTag: {
        description: 'Handles `tag` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      select: {
        description: 'Selects one or more options.',
        returns: 'void',
        params: {
          options: {
            types: [
              'str',
              'array',
            ],
            required: 'true',
            description: 'value(s) of the option(s) to select',
          },
        },
        private: false,
      },
      deselect: {
        description: 'Deselects one or more options.',
        returns: 'void',
        params: {
          options: {
            types: [
              'str',
              'array',
            ],
            required: 'true',
            description: 'value(s) of the option(s) to deselect',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
      select: {
        description: 'Select event',
      },
      deselect: {
        description: 'Select event',
      },
      searchChange: {
        description: 'searchChange event',
      },
      open: {
        description: 'Open event',
      },
      close: {
        description: 'Close event',
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before-list': {},
      'after-list': {},
      'multiple-label': {},
      'no-results': {},
      'no-options': {},
      'option': {},
    },
  },
  ObjectElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'object',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      schema: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
        ],
        private: false,
      },
      embed: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      children$Array: {
        types: [
          'array,component',
        ],
        description: 'List of child element components.',
        default: '[children<component>]',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      children: {
        types: [
          'object',
        ],
        description: 'Schema of child elements.',
        private: true,
      },
      children$: {
        types: [
          'object,Element',
        ],
        description: 'Child element components.',
        default: '{[name]:component}',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      component: {
        description: 'Transforms an element `:type` into the element&apos;s component name.',
        returns: 'string',
        params: {
          element: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'element `:type`',
          },
        },
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  RadioElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'radio',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      fieldName: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      radioValue: {
        required: 'false',
        default: '1',
        types: [
          'boolean',
          'string',
          'number',
        ],
        private: false,
      },
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      check: {
        description: 'Checks the radio.',
        returns: 'void',
        private: false,
      },
      uncheck: {
        description: 'Unhecks the radio.',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'default': {
        description: 'Renders a label for the radio.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  RadiogroupElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'radiogroup',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disables: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'radio': {
        description: 'Replaces the template for the radio input. Radio inputs are rendered by the [`RadiogroupRadio`](radiogroup-radio) component which has a default radio template. If the this slot is defined, the default template in [`RadiogroupRadio`](radiogroup-radio) component will be overridden with the content of this slot.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
          id: {
            description: 'the `id` attribute of the radio field used by the default template',
            types: [
              'string',
            ],
          },
          name: {
            description: 'the `name` attribute of the radio field used by the default template',
            types: [
              'string',
            ],
          },
          isDisabled: {
            description: 'whether the radio is disabled',
            types: [
              'boolean',
            ],
          },
          classes: {
            description: 'an object containing the classes of [`RadiogroupRadio`](radiogroup-radio) component',
            types: [
              'object',
            ],
          },
        },
      },
    },
  },
  SelectElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'select',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
          'object',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
        ],
        private: false,
      },
      native: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      noOptionsText: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      noResultsText: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      nativeItems: {
        types: [
          'array',
        ],
        description: 'Contains select options for native select.',
        private: false,
      },
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      updateItems: {
        description: 'Fetches & updates select options when using `async` options.',
        returns: 'void',
        params: {
          shouldDisable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: 'whether the input field should be disabled while fetching options',
          },
        },
        private: false,
      },
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleSelect: {
        description: 'Handles `select` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Handles `deselect` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Handles `searchChange` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Handles `open` event.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Handles `close` event.',
        returns: 'void',
        private: true,
      },
      handleTag: {
        description: 'Handles `tag` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
      select: {
        description: 'Select event',
      },
      deselect: {
        description: 'Select event',
      },
      searchChange: {
        description: 'searchChange event',
      },
      open: {
        description: 'Open event',
      },
      close: {
        description: 'Close event',
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before-list': {},
      'after-list': {},
      'single-label': {},
      'no-results': {},
      'no-options': {},
      'option': {},
    },
  },
  SliderElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'slider',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '0',
        types: [
          'number',
          'array',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      min: {
        required: 'false',
        default: '0',
        types: [
          'number',
        ],
        private: false,
      },
      max: {
        required: 'false',
        default: '100',
        types: [
          'number',
        ],
        private: false,
      },
      step: {
        required: 'false',
        default: '1',
        types: [
          'number',
        ],
        private: false,
      },
      tooltips: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      merge: {
        required: 'false',
        default: '-1',
        types: [
          'number',
        ],
        private: false,
      },
      format: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'function',
        ],
        private: false,
      },
      orientation: {
        required: 'false',
        default: 'horizontal',
        types: [
          'string',
        ],
        private: false,
      },
      direction: {
        required: 'false',
        default: 'ltr',
        types: [
          'string',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  StaticElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'static',
        types: [
          'string',
        ],
        private: true,
      },
      wrap: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      content: {
        required: 'false',
        default: '',
        types: [
          'string',
          'object',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      isHtml: {
        types: [
          'boolean',
        ],
        description: 'Determines if HTML content should be rendered for the element.',
        private: true,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'default': {
        description: 'Renders the content of the static element.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  TTextElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 't-text',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      autocomplete: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      inputType: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      language: {
        types: [
          'string',
        ],
        description: 'The ISO 639-1 code of the currently selected language (2 letters).',
        private: false,
      },
      languages: {
        types: [
          'array',
        ],
        description: 'Available language codes.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleInput: {
        description: 'Handles `input` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element in every language (async).',
        returns: 'void',
        private: false,
      },
      validateLanguage: {
        description: 'Checks each validation rule for the element in a specific language (async).',
        returns: 'void',
        params: {
          lang: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'the langauage to check (defaults to currently selected language)',
          },
        },
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initState: {
        description: 'Inits the default `state` object.',
        returns: 'void',
        private: true,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  TTextareaElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 't-textarea',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      autogrow: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rows: {
        required: 'false',
        default: '3',
        types: [
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      language: {
        types: [
          'string',
        ],
        description: 'The ISO 639-1 code of the currently selected language (2 letters).',
        private: false,
      },
      languages: {
        types: [
          'array',
        ],
        description: 'Available language codes.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      autosize: {
        description: 'Updates the height of the input based in its contents when `autogrow` is enabled.',
        returns: 'void',
        private: false,
      },
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleInput: {
        description: 'Handles `input` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element in every language (async).',
        returns: 'void',
        private: false,
      },
      validateLanguage: {
        description: 'Checks each validation rule for the element in a specific language (async).',
        returns: 'void',
        params: {
          lang: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'the langauage to check (defaults to currently selected language)',
          },
        },
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initState: {
        description: 'Inits the default `state` object.',
        returns: 'void',
        private: true,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  TTrixElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'tTrix',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      accept: {
        required: 'false',
        default: 'null',
        types: [
          'array',
        ],
        private: false,
      },
      acceptMimes: {
        required: 'false',
        default: 'null',
        types: [
          'array',
        ],
        private: false,
      },
      endpoint: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the editor is focused.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      language: {
        types: [
          'string',
        ],
        description: 'The ISO 639-1 code of the currently selected language (2 letters).',
        private: false,
      },
      languages: {
        types: [
          'array',
        ],
        description: 'Available language codes.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      trixEndpoint: {
        types: [
          'string',
        ],
        description: 'The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option.',
        default: '`config.endpoints.elements`',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleError: {
        description: 'Handles `error` event.',
        returns: 'void',
        params: {
          message: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'error message',
          },
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      handleInput: {
        description: 'Handles `input` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element in every language (async).',
        returns: 'void',
        private: false,
      },
      validateLanguage: {
        description: 'Checks each validation rule for the element in a specific language (async).',
        returns: 'void',
        params: {
          lang: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'the langauage to check (defaults to currently selected language)',
          },
        },
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initState: {
        description: 'Inits the default `state` object.',
        returns: 'void',
        private: true,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
      error: {
        description: 'Error event',
        params: {
          message: {
            description: 'Message',
            types: [
              'string',
            ]
          },
          e: {
            description: 'Event',
            types: [
              'Event',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  TagsElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'tags',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      items: {
        required: 'false',
        default: '{}',
        types: [
          'object',
          'array',
          'function',
        ],
        private: false,
      },
      search: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      create: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      onSelect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onDeselect: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onSearchChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onOpen: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onClose: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      onTag: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      nativeItems: {
        types: [
          'array',
        ],
        description: 'Contains select options for native select.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      updateItems: {
        description: 'Fetches & updates select options when using `async` options.',
        returns: 'void',
        params: {
          shouldDisable: {
            types: [
              'boolean',
            ],
            required: 'true',
            description: 'whether the input field should be disabled while fetching options',
          },
        },
        private: false,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleSelect: {
        description: 'Handles `select` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the selected option object',
          },
        },
        private: true,
      },
      handleDeselect: {
        description: 'Handles `deselect` event.',
        returns: 'void',
        params: {
          option: {
            types: [
              'object',
            ],
            required: 'true',
            description: 'the deselected option object',
          },
        },
        private: true,
      },
      handleSearchChange: {
        description: 'Handles `searchChange` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      handleOpen: {
        description: 'Handles `open` event.',
        returns: 'void',
        private: true,
      },
      handleClose: {
        description: 'Handles `close` event.',
        returns: 'void',
        private: true,
      },
      handleTag: {
        description: 'Handles `tag` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query',
          },
        },
        private: true,
      },
      handleTag: {
        description: 'Handles `tag` event.',
        returns: 'void',
        params: {
          searchQuery: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the current search query.',
          },
        },
        private: true,
      },
      select: {
        description: 'Selects one or more options.',
        returns: 'void',
        params: {
          options: {
            types: [
              'str',
              'array',
            ],
            required: 'true',
            description: 'value(s) of the option(s) to select',
          },
        },
        private: false,
      },
      deselect: {
        description: 'Deselects one or more options.',
        returns: 'void',
        params: {
          options: {
            types: [
              'str',
              'array',
            ],
            required: 'true',
            description: 'value(s) of the option(s) to deselect',
          },
        },
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
      select: {
        description: 'Select event',
      },
      deselect: {
        description: 'Select event',
      },
      searchChange: {
        description: 'searchChange event',
      },
      open: {
        description: 'Open event',
      },
      close: {
        description: 'Close event',
      },
      tag: {
        description: 'Tag event',
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before-list': {},
      'after-list': {},
      'no-results': {},
      'no-options': {},
      'option': {},
      'tag': {},
    },
  },
  TextElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      autocomplete: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      inputType: {
        required: 'false',
        default: 'text',
        types: [
          'string',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleInput: {
        description: 'Handles `input` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  TextareaElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'textarea',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      addons: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      autogrow: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rows: {
        required: 'false',
        default: '3',
        types: [
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      floating: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      readonly: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      autosize: {
        description: 'Updates the height of the input based in its contents when `autogrow` is enabled.',
        returns: 'void',
        private: false,
      },
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleInput: {
        description: 'Handles `input` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-before': {
        description: 'Prepends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'addon-after': {
        description: 'Appends an addon to the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  ToggleElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'toggle',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'undefined',
        types: [
          'string',
          'number',
          'boolean',
        ],
        private: false,
      },
      trueValue: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
          'string',
          'number',
        ],
        private: false,
      },
      falseValue: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      labels: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      options: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      text: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleChange: {
        description: 'Handles `change` event.',
        returns: 'void',
        params: {
          val: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'value of the element',
          },
        },
        private: true,
      },
      check: {
        description: 'Sets the toggle to `on` (`trueValue`).',
        returns: 'void',
        private: false,
      },
      uncheck: {
        description: 'Sets the toggle to `off` (`falseValue`).',
        returns: 'void',
        private: false,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'default': {
        description: 'Renders a label for the toggle.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
  TrixElement: {
    props: {
      name: {
        required: 'true',
        default: 'undefined',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      conditions: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      onBeforeCreate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onCreated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeMount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onMounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUpdate: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUpdated: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onBeforeUnmount: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      onUnmounted: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      inline: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      layout: {
        required: 'false',
        default: 'ElementLayout',
        types: [
          'string',
          'object',
          'boolean',
        ],
        private: false,
      },
      addClass: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'array',
          'object',
        ],
        private: false,
      },
      overrideClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      addClasses: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      columns: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      overrideComponents: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      description: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      info: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      label: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'object',
          'function',
        ],
        private: false,
      },
      before: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      between: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      after: {
        required: 'false',
        default: 'null',
        types: [
          'object',
          'string',
          'number',
        ],
        private: false,
      },
      slots: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      onChange: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: true,
      },
      formatData: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      formatLoad: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
      submit: {
        required: 'false',
        default: 'true',
        types: [
          'boolean',
        ],
        private: false,
      },
      rules: {
        required: 'false',
        default: 'null',
        types: [
          'array',
          'string',
          'object',
        ],
        private: false,
      },
      messages: {
        required: 'false',
        default: '{}',
        types: [
          'object',
        ],
        private: false,
      },
      type: {
        required: 'false',
        default: 'trix',
        types: [
          'string',
        ],
        private: true,
      },
      default: {
        required: 'false',
        default: 'null',
        types: [
          'string',
          'number',
        ],
        private: false,
      },
      debounce: {
        required: 'false',
        default: 'null',
        types: [
          'number',
        ],
        private: false,
      },
      disabled: {
        required: 'false',
        default: 'false',
        types: [
          'boolean',
        ],
        private: false,
      },
      id: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      placeholder: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      accept: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      acceptMimes: {
        required: 'false',
        default: '[]',
        types: [
          'array',
        ],
        private: false,
      },
      endpoint: {
        required: 'false',
        default: 'null',
        types: [
          'string',
        ],
        private: false,
      },
      onError: {
        required: 'false',
        default: 'null',
        types: [
          'function',
        ],
        private: false,
      },
    },
    data: {
      active: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.',
        default: 'true',
        private: true,
      },
      defaultClasses: {
        types: [
          'object',
        ],
        description: 'The default classes for the element defined by theme.',
        private: true,
      },
      localDisabled: {
        types: [
          'boolean',
          'null',
        ],
        description: 'Helper to store whether the element is disabled via api (with .disable()).',
        default: 'null',
        private: true,
      },
      events: {
        types: [
          'array',
        ],
        description: 'Helper property used to store available events for the element.',
        default: '[]',
        private: true,
      },
      listeners: {
        types: [
          'object',
        ],
        description: 'Helper property used to store listeners for events.',
        default: '{}',
        private: true,
      },
      input: {
        types: [
          'HTMLElement',
        ],
        description: 'The main input field of the element.',
        private: false,
      },
      focused: {
        types: [
          'boolean',
        ],
        description: 'Whether the editor is focused.',
        private: false,
      },
      state: {
        types: [
          'object',
        ],
        description: 'Helper property used to store the element states.',
        default: '{ dirty: false, validate: true }',
        private: true,
      },
      Validators: {
        types: [
          'array,Validator',
        ],
        description: 'An array containing all the validators of the element.',
        default: '[]',
        private: true,
      },
      messageBag: {
        types: [
          'MessageBag',
        ],
        description: 'Instance of MessageBag service.',
        default: 'MessageBag',
        private: false,
      },
      initialValue: {
        types: [
          'any',
        ],
        description: 'The initial value of the element.',
        private: true,
      },
      internalValue: {
        types: [
          'any',
        ],
        description: 'The store for the value of the element when we&apos;re not using external data (form&apos;s `v-model`).',
        private: true,
      },
      hidden: {
        types: [
          'boolean',
        ],
        description: 'Whether the element was hidden programmatically with [`show()`](#show) or [`hide()`](#hide) method.',
        default: 'false',
        private: false,
      },
    },
    computed: {
      el$: {
        types: [
          'component',
        ],
        description: 'The element&apos;s component.',
        private: false,
      },
      isStatic: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is static (does not have any data or validation).',
        private: false,
      },
      isFileType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is a file.',
        private: false,
      },
      isArrayType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an array.',
        private: false,
      },
      isImageType: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value is an image.',
        private: false,
      },
      isActive: {
        types: [
          'boolean',
        ],
        description: 'Whether the element should be visible when using `tabs` or `steps`.',
        private: false,
      },
      classes: {
        types: [
          'object',
        ],
        description: 'An object containaing all the elements classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.',
        private: false,
      },
      mainClass: {
        types: [
          'string',
        ],
        description: 'The class name of the element&apos;s outermost DOM.',
        private: true,
      },
      columnsClasses: {
        types: [
          'object',
        ],
        description: 'Calulated column sizes and classes for the element.',
        private: true,
      },
      components: {
        types: [
          'object',
        ],
        description: 'Returns the components to use within the element. Use [`:overrideComponents`](#override-components) to override any of the element&apos;s components.',
        private: false,
      },
      available: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no [`:conditions`](#conditions) or they are fulfilled.',
        private: false,
      },
      data: {
        types: [
          'object',
        ],
        description: 'The value of the element in `{[name]: value}` value format. This gets merged with the parent component&apos;s data, which finally results in form level data.',
        private: false,
      },
      output: {
        types: [
          'object',
        ],
        description: 'Same as `data` property except that it only includes the element&apos;s value if [`:submit`](#submit) is not disabled and [`available`](#available) is `true` (has no [`:conditions`](#conditions) or they are fulfilled).',
        private: false,
      },
      defaultValue: {
        types: [
          'any',
        ],
        description: 'The default value of the element.',
        private: true,
      },
      isDisabled: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is disabled.',
        private: false,
      },
      empty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has no value filled in.',
        private: false,
      },
      fieldId: {
        types: [
          'string',
        ],
        description: 'The `id` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.',
        private: false,
      },
      genericName: {
        types: [
          'string',
        ],
        description: 'The generic name of the element constructed from label / floating or element name.',
        private: true,
      },
      hasLabel: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has a [`:label`](#option-label) option, a [#label](#slot-label) slot or `Laraform` component&apos;s [`:labels`](laraform#labels) option is `true`. Either way a label should be displayed.',
        private: false,
      },
      elementLayout: {
        types: [
          'string',
          'component',
        ],
        description: 'The current layout of the element.',
        private: true,
      },
      nullValue: {
        types: [
          'any',
        ],
        description: 'The null value of the element.',
        private: true,
      },
      parent: {
        types: [
          'component',
        ],
        description: 'The parent component of the element.',
        private: true,
      },
      path: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path included).',
        private: false,
      },
      dataPath: {
        types: [
          'string',
        ],
        description: 'The path of the element using dot `.` syntax (parent [`GroupElement`](group-element) path excluded).',
        private: false,
      },
      flat: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))',
        private: true,
      },
      elementSlots: {
        types: [
          'object',
        ],
        description: 'Slots of the element.',
        private: true,
      },
      fieldSlots: {
        types: [
          'object',
        ],
        description: 'Slots related to the element&apos;s field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.',
        private: true,
      },
      trixEndpoint: {
        types: [
          'string',
        ],
        description: 'The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option.',
        default: '`config.endpoints.elements`',
        private: true,
      },
      dirty: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s value has been modified by the user.',
        private: false,
      },
      validated: {
        types: [
          'boolean',
        ],
        description: 'Whether the element&apos;s input has already been validated at least once.',
        private: false,
      },
      invalid: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any failing rules.',
        private: false,
      },
      pending: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has any async rules in progress.',
        private: false,
      },
      debouncing: {
        types: [
          'boolean',
        ],
        description: 'Whether the element has an ongoing debounce.',
        private: false,
      },
      busy: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is `pending` or `debouncing`.',
        private: false,
      },
      errors: {
        types: [
          'array',
        ],
        description: 'All the errors of `MessageBag`.',
        private: false,
      },
      error: {
        types: [
          'string',
        ],
        description: 'The first error of `MessageBag`.',
        private: false,
      },
      validationRules: {
        types: [
          'string',
          'array',
        ],
        description: 'The element&apos;s validation rules.',
        private: true,
      },
      value: {
        types: [
          'any',
        ],
        description: 'The value of the element.',
        private: false,
      },
      model: {
        types: [
          'any',
        ],
        description: 'Intermediary value between element&apos;s value and field&apos;s `v-model`. It is required when we need to transform the value format between the element and its field.',
        private: false,
      },
      visible: {
        types: [
          'boolean',
        ],
        description: 'Whether the element is visible. It&apos;s `false` when `available` or `active` is `false` or `hidden` is `true`.',
        private: false,
      },
    },
    methods: {
      activate: {
        description: 'Sets the `active` property of the element to `true`.',
        returns: 'void',
        private: true,
      },
      deactivate: {
        description: 'Sets the `active` property of the element to `false`.',
        returns: 'void',
        private: true,
      },
      load: {
        description: 'Loads value to the element using optional [`:formatLoad`](#format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'the value to be loaded',
          },
          format: {
            types: [
              'boolean',
            ],
            required: 'false',
            description: 'whether the loaded value should be formatted with [`:formatLoad`](#format-load) before setting the value of the element (default: `false`)',
          },
        },
        private: false,
      },
      update: {
        description: 'Updates the value of the element similarly to [`load`](#load), only that it can\&apos;t format format data.',
        returns: 'void',
        params: {
          value: {
            types: [
              'string',
              '',
            ],
            required: 'true',
            description: 'the value to be set',
          },
        },
        private: false,
      },
      clear: {
        description: 'Clears the element&apos;s value.',
        returns: 'void',
        private: false,
      },
      reset: {
        description: 'Resets the element&apos;s value to [`:default`](#default) (or empty if `:default` is not provided). Also resets all the validation state for the element.',
        returns: 'void',
        private: false,
      },
      prepare: {
        description: 'Prepares the element.',
        returns: 'void',
        private: true,
      },
      disable: {
        description: 'Disables the element.',
        returns: 'void',
        private: false,
      },
      enable: {
        description: 'Enables the element even if it is disabled by [`:disabled`](#disabled) option.',
        returns: 'void',
        private: false,
      },
      on: {
        description: 'Adds a listener for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to listen for',
          },
          callback: {
            types: [
              'function',
            ],
            required: 'false',
            description: 'callback to run when the event is triggered',
          },
        },
        private: false,
      },
      off: {
        description: 'Removes all listeners for an event.',
        returns: 'void',
        params: {
          event: {
            types: [
              'string',
            ],
            required: 'false',
            description: 'name of the event to remove',
          },
        },
        private: false,
      },
      fire: {
        description: 'Fires & emits an event.',
        returns: 'void',
        params: {
          args: {
            types: [
              'any',
            ],
            required: 'false',
            description: 'list of arguments to pass over to the event callback ',
          },
        },
        private: false,
      },
      handleError: {
        description: 'Handles `error` event.',
        returns: 'void',
        params: {
          message: {
            types: [
              'string',
            ],
            required: 'true',
            description: 'error message',
          },
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      handleInput: {
        description: 'Handles `input` event.',
        returns: 'void',
        params: {
          e: {
            types: [
              'Event',
            ],
            required: 'true',
            description: '',
          },
        },
        private: true,
      },
      validate: {
        description: 'Checks each validation rule for the element (async).',
        returns: 'void',
        private: false,
      },
      dirt: {
        description: 'Flag the element as dirty.',
        returns: 'void',
        private: true,
      },
      clean: {
        description: 'Removes the element&apos;s `dirty` state.',
        returns: 'void',
        private: false,
      },
      resetValidators: {
        description: 'Sets the validators to default state.',
        returns: 'void',
        private: false,
      },
      initMessageBag: {
        description: 'Initalizes MessageBag service.',
        returns: 'void',
        private: true,
      },
      initValidation: {
        description: 'Initalizes validators.',
        returns: 'void',
        private: true,
      },
      hide: {
        description: 'Hides the element.',
        returns: 'void',
        private: false,
      },
      show: {
        description: 'Shows the element if it was hidden with [`hide()`](#hide) method.',
        returns: 'void',
        private: false,
      },
    },
    inject: {
      form$: {
        types: [
          'component',
        ],
        description: 'The root form component.',
        private: false,
      },
      theme: {
        types: [
          'object',
        ],
        description: 'The global theme object, which contains all the default components and classes.',
        private: false,
      },
    },
    events: {
      change: {
        description: 'Change event',
        params: {
          newValue: {
            description: 'New value',
            types: [
              'string',
            ]
          },
          oldValue: {
            description: 'Old value',
            types: [
              'string',
            ]
          },
       },
      },
      error: {
        description: 'Error event',
        params: {
          message: {
            description: 'Message',
            types: [
              'string',
            ]
          },
          e: {
            description: 'Event',
            types: [
              'Event',
            ]
          },
       },
      },
    },
    slots: {
      'label': {
        description: 'Renders a label for the element in [`ElementLabel`](element-label) component.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'info': {
        description: 'Renders an info icon in [`ElementInfo`](element-info) component next the the element label. When the icon is hovered it shows the content of this slot. The element needs to have a label to render this.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'description': {
        description: 'Renders description for the element in [`ElementDescription`](element-description) component',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'before': {
        description: 'Renders an [`ElementText`](element-text) component before the <%field%>.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'between': {
        description: 'Renders an [`ElementText`](element-text) component after the <%field%> and before description.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
      'after': {
        description: 'Renders an [`ElementText`](element-text) component after the description and error.',
        props: {
          el$: {
            description: 'the element&apos;s component',
            types: [
              'component',
            ],
          },
        },
      },
    },
  },
}