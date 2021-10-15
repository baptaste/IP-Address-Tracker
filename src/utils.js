export const validateIpAddress = (ipaddress) => {
  if (/^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(ipaddress)) return (true)

  return (false)
}