export const downloadFileAtURL = () => {
  const link = document.createElement('a')
  link.href = '/chinwe-nwankwo.pdf'
  link.download = 'Chinwe_Nwankwo_CV.docx'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
