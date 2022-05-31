const filtrarDatos = (data) => {
  let schedule1 = []
  let schedule2 = []
  let schedule3 = []
  let schedule4 = []
  let schedule5 = []
  let schedule6 = []
  let users = []
  let countAssitance = 0
  let countTardies = 0
  let idEmployee = ''
  let nameEmp = ''
  let antEmp = ''
  let dayMonth=28

  data.map((el) => {
    if (el.assignedArea == 'ALEPH SECTOR 1') {
      schedule1.push(el)
    }
  })
  data.map((el) => {
    if (el.assignedArea == 'ALEPH SECTOR 2') {
      schedule2.push(el)
    }
  })
  data.map((el) => {
    if (el.assignedArea == 'ALEPH SECTOR 3') {
      schedule3.push(el)
    }
  })
  data.map((el) => {
    if (el.assignedArea == 'ALEPH SECTOR 4') {
      schedule4.push(el)
    }
  })
  data.map((el) => {
    if (el.assignedArea == 'ALEPH SECTOR 5') {
      schedule5.push(el)
    }
  })

  data.map((el) => {
    if (el.assignedArea == 'ALEPH SECTOR 6') {
      schedule6.push(el)
 
    }
  })

  //sector 1
  schedule1.map((el, index) => {
    if (index % 4 == 0) {
      let year = new Date(el.timeAtendance).getFullYear()
      let month = new Date(el.timeAtendance).getMonth()
      let day = new Date(el.timeAtendance).getDate()
      let timestampInit = new Date(el.timeAtendance).getTime()
      let timestampLimit = new Date(year, month, day).getTime() + 32400000
      idEmployee = el.idEmployee
      nameEmp = el.nameEmployee
      antEmp = schedule1[index - 1]
      if (idEmployee != antEmp?.idEmployee) {
        if (antEmp != null) {
          users.push({
            uid: antEmp.idEmployee,
            nameEmployee: antEmp.nameEmployee,
            assitance: countAssitance,
            tardies: countTardies,
            absences: dayMonth - (countAssitance + countTardies),
            schedule:antEmp.assignedArea
          })
        }
        countAssitance = 0
        countTardies = 0
      }
      if (timestampInit < timestampLimit) {
        countAssitance++
      }
      if (timestampInit > timestampLimit) {
        countTardies++
      }
    }
    if (index + 1 == schedule1.length) {
      users.push({
        uid: idEmployee,
        nameEmployee: nameEmp,
        assitance: countAssitance,
        tardies: countTardies,
        absences: dayMonth - (countAssitance + countTardies),
        schedule:el.assignedArea
      })
    }
  })

  //sector 2
  schedule2.map((el, index) => {
    if (index % 2 == 0) {
      let year = new Date(el.timeAtendance).getFullYear()
      let month = new Date(el.timeAtendance).getMonth()
      let day = new Date(el.timeAtendance).getDate()
      let timestampInit = new Date(el.timeAtendance).getTime()
      let timestampLimit = new Date(year, month, day).getTime() + 32400000
      idEmployee = el.idEmployee
      nameEmp = el.nameEmployee
      antEmp = schedule2[index - 1]
      if (idEmployee != antEmp?.idEmployee) {
        if (antEmp != null) {
          users.push({
            uid: antEmp.idEmployee,
            nameEmployee: antEmp.nameEmployee,
            assitance: countAssitance,
            tardies: countTardies,
            absences: dayMonth - (countAssitance + countTardies),
            schedule:antEmp.assignedArea
          })
        }
        countAssitance = 0
        countTardies = 0
      }
      if (timestampInit < timestampLimit) {
        countAssitance++
      }
      if (timestampInit > timestampLimit) {
        countTardies++
      }
    }
    if (index + 1 == schedule2.length) {
      users.push({
        uid: idEmployee,
        nameEmployee: nameEmp,
        assitance: countAssitance,
        tardies: countTardies,
        absences: dayMonth - (countAssitance + countTardies),
        schedule:el.assignedArea
      })
    }
  })

  //sector 3
  schedule3.map((el, index) => {
    if (index % 2 == 0) {
      let year = new Date(el.timeAtendance).getFullYear()
      let month = new Date(el.timeAtendance).getMonth()
      let day = new Date(el.timeAtendance).getDate()
      let timestampInit = new Date(el.timeAtendance).getTime()
      let timestampLimit = new Date(year, month, day).getTime() + 32400000
      idEmployee = el.idEmployee
      nameEmp = el.nameEmployee
      antEmp = schedule3[index - 1]
      if (idEmployee != antEmp?.idEmployee) {
        if (antEmp != null) {
          users.push({
            uid: antEmp.idEmployee,
            nameEmployee: antEmp.nameEmployee,
            assitance: countAssitance,
            tardies: countTardies,
            absences: dayMonth - (countAssitance + countTardies),
            schedule:antEmp.assignedArea
          })
        }
        countAssitance = 0
        countTardies = 0
      }
      if (timestampInit < timestampLimit) {
        countAssitance++
      }
      if (timestampInit > timestampLimit) {
        countTardies++
      }
    }
    if (index + 1 == schedule3.length) {
      users.push({
        uid: idEmployee,
        nameEmployee: nameEmp,
        assitance: countAssitance,
        tardies: countTardies,
        absences: dayMonth - (countAssitance + countTardies),
        schedule:el.assignedArea
      })
    }
  })

  //sector 4
  schedule4.map((el, index) => {
    if (index % 2 == 0) {
      let year = new Date(el.timeAtendance).getFullYear()
      let month = new Date(el.timeAtendance).getMonth()
      let day = new Date(el.timeAtendance).getDate()
      let timestampInit = new Date(el.timeAtendance).getTime()
      let timestampLimit = new Date(year, month, day).getTime() + 32400000
      idEmployee = el.idEmployee
      nameEmp = el.nameEmployee
      antEmp = schedule4[index - 1]
      if (idEmployee != antEmp?.idEmployee) {
        if (antEmp != null) {
          users.push({
            uid: antEmp.idEmployee,
            nameEmployee: antEmp.nameEmployee,
            assitance: countAssitance,
            tardies: countTardies,
            absences: dayMonth - (countAssitance + countTardies),
            schedule:antEmp.assignedArea
          })
        }
        countAssitance = 0
        countTardies = 0
      }
      if (timestampInit < timestampLimit) {
        countAssitance++
      }
      if (timestampInit > timestampLimit) {
        countTardies++
      }
    }
    if (index + 1 == schedule4.length) {
      users.push({
        uid: idEmployee,
        nameEmployee: nameEmp,
        assitance: countAssitance,
        tardies: countTardies,
        absences: dayMonth - (countAssitance + countTardies),
        schedule:el.assignedArea
      })
    }
  })
  //sector 5
  schedule5.map((el, index) => {
    if (index % 4 == 0) {
      let year = new Date(el.timeAtendance).getFullYear()
      let month = new Date(el.timeAtendance).getMonth()
      let day = new Date(el.timeAtendance).getDate()
      let timestampInit = new Date(el.timeAtendance).getTime()
      let timestampLimit = new Date(year, month, day).getTime() + 32400000
      idEmployee = el.idEmployee
      nameEmp = el.nameEmployee
      antEmp = schedule5[index - 1]
      if (idEmployee != antEmp?.idEmployee) {
        if (antEmp != null) {
          users.push({
            uid: antEmp.idEmployee,
            nameEmployee: antEmp.nameEmployee,
            assitance: countAssitance,
            tardies: countTardies,
            absences: dayMonth - (countAssitance + countTardies),
            schedule:antEmp.assignedArea
          })
        }
        countAssitance = 0
        countTardies = 0
      }
      if (timestampInit < timestampLimit) {
        countAssitance++
      }
      if (timestampInit > timestampLimit) {
        countTardies++
      }
    }
    if (index + 1 == schedule5.length) {
      users.push({
        uid: idEmployee,
        nameEmployee: nameEmp,
        assitance: countAssitance,
        tardies: countTardies,
        absences: dayMonth - (countAssitance + countTardies),
        schedule:el.assignedArea
      })
    }
  })
//sector 6
schedule6.map((el, index) => {
  if (index % 2 == 0) {
    let year = new Date(el.timeAtendance).getFullYear()
    let month = new Date(el.timeAtendance).getMonth()
    let day = new Date(el.timeAtendance).getDate()
    let timestampInit = new Date(el.timeAtendance).getTime()
    let timestampLimit = new Date(year, month, day).getTime() + 32400000
    idEmployee = el.idEmployee
    nameEmp = el.nameEmployee
    antEmp = schedule6[index - 1]
    if (idEmployee != antEmp?.idEmployee) {
      if (antEmp != null) {
        users.push({
          uid: antEmp.idEmployee,
          nameEmployee: antEmp.nameEmployee,
          assitance: countAssitance,
          tardies: countTardies,
          absences: dayMonth - (countAssitance + countTardies),
          schedule:antEmp.assignedArea
        })
      }
      countAssitance = 0
      countTardies = 0
    }
    if (timestampInit < timestampLimit) {
      countAssitance++
    }
    if (timestampInit > timestampLimit) {
      countTardies++
    }
  }
  if (index + 1 == schedule6.length) {
    users.push({
      uid: idEmployee,
      nameEmployee: nameEmp,
      assitance: countAssitance,
      tardies: countTardies,
      absences: dayMonth - (countAssitance + countTardies),
      schedule:el.assignedArea
    })
  }
})
  return users
}

export { filtrarDatos }
