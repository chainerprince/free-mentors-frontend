import * as React from "react"
import Button from "@mui/material/Button"
import CardComponent from "../../components/CardComponent"
import CustomizedDialog from "../../components/ViewMoreDialog"
const mentors = [
  {
    name: "John Doe",
    description:
      "Experienced web developer with expertise in React and Node.js.",
    image: "/john_doe.jpg",
  },
  {
    name: "Jane Smith",
    description:
      "UX/UI designer with a passion for creating user-friendly interfaces.",
    image: "/jane_smith.jpg",
  },
]

const MentorPage = () => {
  const handleRequestSession = (mentorName: string) => {
    alert(`Requested session with ${mentorName}`)
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const dialogContent = [
    "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.",
  ]

  const dialogActions = (
    <>
      <Button autoFocus onClick={handleClose}>
        Close
      </Button>
      <Button size="small">
        Request Session
      </Button>
    </>
  )

  return (
    <div>
      <h1 className="my-2 text-2xl">List of Mentors</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {mentors.map((mentor, index) => (
          <CardComponent
            key={index}
            image={mentor.image}
            title={mentor.name}
            description={mentor.description}
            actionButtons={
              <>
                <Button
                  size="small"
                  onClick={() => handleRequestSession(mentor.name)}
                >
                  Request Session
                </Button>
                <Button size="small" onClick={handleClickOpen}>
                  View more
                </Button>
              </>
            }
          />
        ))}
      </div>
      <CustomizedDialog
        open={open}
        onClose={handleClose}
        title="Mentor Information"
        content={dialogContent}
        actions={dialogActions}
      />
    </div>
  )
}

export default MentorPage
