export const mapStateToProps = state => {
  return {
    universities: state.universities,
    faculties: state.faculties
  }
}

export const mergeArray = (universities, faculties) => {
  let data = []
  if (!universities && !faculties) return null
  universities.map(university => {
    let listOfFaculty = {
      faculties: []
    }
    faculties.map(faculty => {
      if (university.id === faculty.univ_id) {
        listOfFaculty = {
          ...listOfFaculty,
          faculties: [...listOfFaculty.faculties, { ...faculty }]
        }
      }
    })
    data = [
      ...data,
      {
        ...university,
        ...listOfFaculty
      }
    ]
  })

  data.map((university, index) => {
    const section = university.faculties.length % 2 === 0 ? parseInt(university.faculties.length / 2) : parseInt(university.faculties.length / 2) + 1
    const faculties = []
    let sectionFaculties = []
    university.faculties.map((faculty, index) => {
      if (index < section) {
        sectionFaculties = [...sectionFaculties, { ...faculty }]
      } else if (index === section) {
        faculties.push(sectionFaculties)
        sectionFaculties = [{ ...faculty }]
      } else {
        sectionFaculties = [...sectionFaculties, { ...faculty }]
      }
    })
    faculties.push(sectionFaculties)
    university.faculties = faculties
    data[index] = university
  })
  return data
}
