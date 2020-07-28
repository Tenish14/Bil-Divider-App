document.querySelector('#addTip').addEventListener('click', (e) => {
  e.preventDefault();
  showTipInput();
})
const showTipInput = () => {
  const tipBtns = document.querySelector('#tipInput')
  if (tipBtns.style.display === "block") {
    tipBtns.style.display = "none"
  } else {
    tipBtns.style.display = "block"
  }
}
document.querySelector('#calc').addEventListener('click', (e) => {
	e.preventDefault();
	let total = parseInt(document.querySelector('#total').value);
	let people = parseInt(document.querySelector('#people').value);
	let percentage = parseInt(document.querySelector('#percentage').value);
	let givetip = parseInt(document.querySelector('#customTip').value);
	if (percentage == percentage) {
		percentage = percentage
	} else {
		percentage = 0
	}
	if (givetip == givetip) {
		givetip = givetip
	} else {
		givetip = 0
	}
	let percentageval = total / 100 * percentage
	let value = ( total + percentageval + givetip ) / people
	console.log(percentage)
	document.querySelector('#totalAmount').innerHTML = value
})