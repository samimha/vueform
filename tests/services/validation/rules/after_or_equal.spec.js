import { createLocalVue } from '@vue/test-utils'
import { createForm, findAllComponents, change, setDate } from './.test-helpers'

describe('After Or Equal Rule', () => {
  it('should work with `yesterday`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'after_or_equal:yesterday',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    expect(a.vm.invalid).toBe(false)

    change(a, today)
    expect(a.vm.invalid).toBe(false)

    change(a, tomorrow)
    expect(a.vm.invalid).toBe(false)

    done()
  })
  
  it('should work with `today`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'after_or_equal:today',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    expect(a.vm.invalid).toBe(true)

    change(a, today)
    expect(a.vm.invalid).toBe(false)

    change(a, tomorrow)
    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should work with `tomorrow`', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'text',
          rules: 'after_or_equal:tomorrow',
        }
      }
    })

    let a = findAllComponents(form, { name: 'TextElement' }).at(0)

    let yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD')
    let today = moment().format('YYYY-MM-DD')
    let tomorrow = moment().add(1, 'days').format('YYYY-MM-DD')
    let after_tomorrow = moment().add(2, 'days').format('YYYY-MM-DD')

    change(a, yesterday)
    expect(a.vm.invalid).toBe(true)

    change(a, today)
    expect(a.vm.invalid).toBe(true)

    change(a, tomorrow)
    expect(a.vm.invalid).toBe(false)

    change(a, after_tomorrow)
    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should work with `absolute` dates', (done) => {
    let form = createForm({
      schema: {
        a: {
          type: 'date',
          rules: 'after_or_equal:25/12/2020',
          loadFormat: 'DD/MM/YYYY',
          valueFormat: 'DD/MM/YYYY'
        }
      }
    })

    let a = findAllComponents(form, { name: 'DateElement' }).at(0)

    setDate(a, '24/12/2020')
    expect(a.vm.invalid).toBe(true)

    setDate(a, '25/12/2020')
    expect(a.vm.invalid).toBe(false)

    setDate(a, '26/12/2020')
    expect(a.vm.invalid).toBe(false)

    done()
  })

  it('should work with other `element` date', (done) => {
    let form = createForm({
      schema: {
        from: {
          type: 'date',
        },
        to: {
          type: 'date',
          rules: 'after_or_equal:from',
        },
      }
    })

    let from = findAllComponents(form, { name: 'DateElement' }).at(0)
    let to = findAllComponents(form, { name: 'DateElement' }).at(1)

    setDate(from, '2020-12-25')
    setDate(to, '2020-12-24')
    expect(to.vm.invalid).toBe(true)

    setDate(from, '2020-12-25')
    setDate(to, '2020-12-25')
    expect(to.vm.invalid).toBe(false)

    setDate(from, '2020-12-25')
    setDate(to, '2020-12-26')
    expect(to.vm.invalid).toBe(false)

    done()
  })
  
  it('should work with multiple dates', (done) => {
    const LocalVue = createLocalVue()

    LocalVue.config.errorHandler = done

    let form = createForm({
      schema: {
        a: {
          type: 'date',
          mode: 'multiple',
          rules: 'after_or_equal:2020-12-26'
        }
      }
    })

    let a = findAllComponents(form, { name: 'DateElement' }).at(0)

    setDate(a, ['2020-12-24', '2020-12-30'])
    expect(a.vm.invalid).toBe(true)

    setDate(a, ['2020-12-26', '2020-12-30'])
    expect(a.vm.invalid).toBe(false)

    done()
  })
})