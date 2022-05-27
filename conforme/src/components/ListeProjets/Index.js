import React, {useState}from 'react'
import { ListHeader, ListH1, ListBtn, ListInput } from './ListePrjElements'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
//import creerPrjt from './creerPrjt'


const ListeProjets = (save) => {
const [nomPrj, setNomPrj] = useState('');  
const [organisme, setOrganisme] = useState('');
const [modal, setModal] = useState(false);
const [list, setList] = useState([])
const toggle = () => setModal(!modal);

  const handelChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  if(name === "nomPrj"){
    setNomPrj(value)
  }
  else
  {
    setOrganisme(value)
  }
  }
  const saveList = (listObj) => {
    let tempList= list
    tempList.push(listObj)
    setList(tempList)
    setModal(false)
    listObj["Name"]= nomPrj
    listObj["Organisme"]= organisme
    save(listObj)
    
  }  

  return (
      <>
     <ListHeader>
     
    <ListH1>Liste des Projets</ListH1>
    <div modal= {modal} toggle= {toggle} >
    <ListBtn onClick={ toggle}>Nouveau Projet </ListBtn>
    <Modal
    isOpen={modal} toggle= {toggle} >
    <ModalHeader toggle={toggle} >
      Creation de projet
    </ModalHeader>
    <ModalBody>
      <form>
        <div>
          <label> Nom de Projet</label>
            <ListInput value={nomPrj} onChange ={handelChange} name="nomPrj"/>

        </div>
        <div>
          <label> Nom de L'organisme</label>
            <ListInput value={organisme} onChange ={handelChange} name="organisme"/>

        </div>
      </form>
    </ModalBody>
    <ModalFooter save={saveList} >
      <Button
        
        onClick={saveList}
      >
        Creer
      </Button>
      {' '}
      <Button onClick={toggle}>
        Annuler
      </Button>
    </ModalFooter>
  </Modal>
  </div>
    </ListHeader> 
    <div>
    
        {list.map((obj) => <li>{obj.Name}</li>)}
           
    </div>
    
    </>
  )
}

export default ListeProjets