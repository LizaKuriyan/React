import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const students = ["Abdu", "Aswathy", "Sujith", "Liza"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student List</h2>

      <ul>
        {students.map((student) => (
          <li key={student}>
            <Link to={`/student/${student}`}>{student}</Link>
          </li>
        ))}
      </ul>

      <br />

      <button onClick={() => navigate("/student/Riya")}>
        Go to Default Student
      </button>
    </div>
  );
}

export default Home;
