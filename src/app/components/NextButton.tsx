import { useSearchParams } from "next/navigation"

export default async function nextButton() {
  const page = useSearchParams()
  const pageNum = page.get("p")
  let pageNumber = Number(pageNum)

  console.log(typeof pageNumber)

  document.getElementById("back-btn")!.style.display = "inline-block"
  pageNumber++
}
