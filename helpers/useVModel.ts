import { Ref, ref, watch } from 'vue'

type Emit<K extends string, T> = (_event: `update:${K}`, _value: T) => void

/**
 * Helper function used to replicate the logic needed to enable two-way data-binding for most components.
 *
 * @param props - properties map (as returned from withDefaults or defineProps)
 * @param emit - emit function (as returned from defineEmits)
 * @param propName - name of property to bind with (default as modelValue)
 * @param updateProxy - a proxy function to adapt or transform next values (do not perform any changes as default)
 */
export function useVModel<T, K extends string = 'modelValue'>(
  props: { [_key in K]: T },
  emit: Emit<K, T>,
  propName: K,
  updateProxy: (_newValue: T, _oldValue: T) => T = value => value
) {
  // Copy property initial value.
  const value = <Ref<T>>ref(props[propName])

  // Watch for any property change and updates the copy.
  // May transform or adapt the new value by updateProxy parameter.
  watch(
    () => props[propName],
    (newValue, oldValue) => {
      value.value = updateProxy(newValue, oldValue)
      return value.value
    }
  )

  // Watch for any changes on the copy and propagates to parent.
  watch(value, () => emit(`update:${propName}`, value.value))

  return value
}
