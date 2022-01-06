
const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutos')
const HoursContainer = document.querySelector('#horas')
const daysContainer = document.querySelector('#dias')

const nextYear = new Date().getFullYear() + 1
const newYearTIme = new Date(`september 25 ${nextYear} 00:00`)

const uptadeCountdown = () => {
  const currentTime = new Date()
  const difference = newYearTIme - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60

  secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds
  minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
  HoursContainer.textContent = hours < 10 ? '0' + hours : hours
  daysContainer.textContent = days < 10 ? '0' + days : days
}

setInterval(uptadeCountdown, 1000)
