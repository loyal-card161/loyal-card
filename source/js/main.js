const contacts = document.querySelector(".vkb")
const contactsW = document.querySelector(".contacts__wrapper")
const far = document.querySelector(".far")
const farW = document.querySelector(".far__wrapper")
const par = document.querySelector(".par")
const parW = document.querySelector(".partners__wrapper")
const cli = document.querySelector(".clients")
const cliW = document.querySelector(".clients__wrapper")
const tar = document.querySelector(".target")
const tarW = document.querySelector(".target__wrapper")

contacts.addEventListener("mousedown", () => {
  if(contactsW.classList.contains("close")) {
    tarW.classList.add("close")
    contactsW.classList.add("close")
    parW.classList.add("close")
    cliW.classList.add("close")
    farW.classList.add("close")

    contactsW.classList.remove("close")
  }
  else contactsW.classList.add("close")
})

par.addEventListener("mousedown", () => {
  if(parW.classList.contains("close")) {
    tarW.classList.add("close")
    contactsW.classList.add("close")
    parW.classList.add("close")
    cliW.classList.add("close")
    farW.classList.add("close")

    parW.classList.remove("close")
  }
  else parW.classList.add("close")
})

cli.addEventListener("mousedown", () => {
  if(cliW.classList.contains("close")) {
    tarW.classList.add("close")
    contactsW.classList.add("close")
    parW.classList.add("close")
    cliW.classList.add("close")
    farW.classList.add("close")

    cliW.classList.remove("close")
  }
  else cliW.classList.add("close")
})

tar.addEventListener("mousedown", () => {
  if(tarW.classList.contains("close")) {
    tarW.classList.add("close")
    contactsW.classList.add("close")
    parW.classList.add("close")
    cliW.classList.add("close")
    farW.classList.add("close")

    tarW.classList.remove("close")
  }
  else tarW.classList.add("close")
})

far.addEventListener("mousedown", () => {
  if(farW.classList.contains("close")) {
    tarW.classList.add("close")
    contactsW.classList.add("close")
    parW.classList.add("close")
    cliW.classList.add("close")
    farW.classList.add("close")

    farW.classList.remove("close")
  }
  else farW.classList.add("close")
})
