import { useSearchParams } from "next/navigation"

export default async function backButton() {
  const page = useSearchParams
  const pageNum = page.get("p")
  let pageNumber = Number(pageNum)

  console.log(typeof pageNumber)

  if (pageNumber === 0) {
    document.getElementById("back-btn")!.style.display = "none"
    return
  } else {
    pageNumber--
    router.push(`/search?q=${encodedInput}&p=0`)
  }
}
