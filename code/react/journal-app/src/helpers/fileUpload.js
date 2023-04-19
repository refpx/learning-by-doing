export const fileUpload = async (file) => {
  if (!file) throw new Error('No file provided')

  const cloudUrl = 'https://api.cloudinary.com/v1_1/refpx/upload'
  const formData = new FormData()
  formData.append('upload_preset', 'journal-app')
  formData.append('file', file)

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData
    })
    if (!resp.ok) throw new Error('Error uploading file')
    const cloudResp = await resp.json()
    return cloudResp.secure_url
  } catch (error) {
    throw new Error(error.message)
  }
}
