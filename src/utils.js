export const validateIpAddress = (value) => {
  if (/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(value)) return (true)
  return (false)
}

export const validateDomain = (value) => {
  if (/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/.test(value)) return (true)
  return (false)
}
