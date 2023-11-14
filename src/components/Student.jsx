import Score from './Score'

const Student = ({ students }) => {
  return (
    <ul>
    {students.map((student,index) =>
      (
        <li key={index}>
           Name: {student.name}, Bio :{student.bio}
          <Score scores={student.scores} />
        </li>))}
    
    </ul>

  )

}

export default Student