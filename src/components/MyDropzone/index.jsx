import { DropContainer } from './styles'
import Button from 'components/Button'

function Dropzone(props) {
  // const onDrop = useCallback((acceptedFiles) => {
  //   console.log(acceptedFiles)
  // }, [])

  const { getRootProps, getInputProps, open, acceptedFiles } = props

  // const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
  //   onUpload,
  //   noClick: true,
  //   noKeyboard: true,
  //   accept: 'image/jpeg, image/png',
  //   maxFiles: 1,
  //   maxSize: 20000000
  // })

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <div className="container">
      <DropContainer>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Button type="button" onClick={open}>
            Imagem de capa
          </Button>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </DropContainer>
    </div>
  )
}

export default Dropzone
