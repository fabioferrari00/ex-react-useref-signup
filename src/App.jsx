import { useState } from "react"

function App() {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearExp, setYearExp] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !username.trim() || !password.trim() || !specialization.trim() || !yearExp.trim() || yearExp <= 0 || !description.trim()) {
      alert("Inserire i campi correttamente!")
    } else {
      console.log("Iscrizione efffettuata con successo")
    }


  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Form iscrizione Web Developer</h1>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Nome completo</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </label>
              <label>
                <span>Username</span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} />
              </label>
              <label>
                <span>Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </label>
              <label>
                <span>Specializzazione</span>
                <select
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                >
                  <option value="">Seleziona una specializzazione</option>
                  <option value="Full Stack">Full Stack</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                </select>
              </label>
              <label>
                <span>Anni di esperienza</span>
                <input
                  type="number"
                  value={yearExp}
                  onChange={(e) => setYearExp(e.target.value)} />
              </label>
              <label>
                <span>Descrizione</span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
              </label>
              <button className="btn btn-primary">Iscriviti</button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
