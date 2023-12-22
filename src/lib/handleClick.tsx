export default function handleClick(copy: any) {
  navigator.clipboard.writeText(copy)
  alert("GIF url copied to clipboard!")
}
