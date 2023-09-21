const team = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
  },
]

let ul = document.querySelector("ul");


for(let member of team){
  console.log(member);
  console.log(member.nome);
  ul.innerHTML += `<li>${member.nome}, ${member.ruolo}</li> 
  <img src="img/${member.foto}"/>`
}



