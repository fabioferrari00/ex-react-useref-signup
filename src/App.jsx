import { useMemo, useRef, useState } from "react"
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `"!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`

function App() {

  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const nameRef = useRef()
  const specializationRef = useRef();
  const yearExpRef = useRef();

  //verifico se è valido l'username
  const isUsernameValid = useMemo(() => {

    const charsValid = username.split("").every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    )
    return charsValid && username.length >= 6;
  }, [username])

  //verifico se la password è valida
  const isPasswordValid = useMemo(() => {
    return (
      password.length >= 8 && password.split("").some(char => letters.includes(char)) && password.split("").some(char => numbers.includes(char)) && password.split("").some(char => symbols.includes(char))
    )
  }, [password])

  //verifico per la descrizione
  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length <= 1000
  }, [description])


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const yearExp = yearExpRef.current.value;
    const specialization = specializationRef.current.value;

    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !yearExp.trim() ||
      yearExp <= 0 ||
      !description.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !isDescriptionValid
    ) {
      alert("Inserire i campi correttamente!")
    } else {
      console.log("Iscrizione effettuata con successo", {
        name,
        username,
        password,
        specialization,
        yearExp,
        description
      })
    }
  }

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <h1>Form iscrizione Web Developer</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="form-label">
                  <span>Nome completo</span>
                  <input
                    className="form-control"
                    type="text"
                    ref={nameRef} />
                </label>
              </div>
              <div>
                <label className="form-label">
                  <span>Username</span>
                  <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                  {username.trim() && (
                    <span style={{ color: isUsernameValid ? 'green' : 'red' }}>{isUsernameValid ? "Username valido" : "Deve avere almeno 6 caratrteri senza caratteri speciali"}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <label className="form-label">
                  <span>Password</span>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                  {password.trim() && (
                    <span style={{ color: isPasswordValid ? 'green' : 'red' }}>{isPasswordValid ? "Password valida" : "Deve avere almeno 8 caratrteri con una lettera, un numero ed un simbolo"}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <label className="form-label">
                  <span>Specializzazione</span>
                  <select
                    className="form-select"
                    ref={specializationRef}
                  >
                    <option value="">Seleziona una specializzazione</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                  </select>
                </label>
              </div>
              <div>
                <label className="form-label">
                  <span>Anni di esperienza</span>
                  <input
                    className="form-control"
                    type="number"
                    ref={yearExpRef} />
                </label>
              </div>
              <div>
                <label className="form-label">
                  <span>Descrizione</span>
                  <textarea
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {description.trim() && (
                    <span style={{ color: isDescriptionValid ? 'green' : 'red' }}>{isDescriptionValid ? "Descrizione valida" : "Deve avere tra i 100 e i 1000 caratteri"}
                    </span>
                  )}
                </label>
              </div>
              <button className="btn btn-primary">Iscriviti</button>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
