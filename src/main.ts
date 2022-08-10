import 'normalize.css'
import './styles/main.scss'
import data from './data.json'

const barOne: HTMLDivElement = document.querySelector('.bar-1')!
const barTwo: HTMLDivElement = document.querySelector('.bar-2')!
const barThree: HTMLDivElement = document.querySelector('.bar-3')!
const barFour: HTMLDivElement = document.querySelector('.bar-4')!
const barFive: HTMLDivElement = document.querySelector('.bar-5')!
const barSix: HTMLDivElement = document.querySelector('.bar-6')!
const barSeven: HTMLDivElement = document.querySelector('.bar-7')!

const createSpan = (): HTMLSpanElement => {
	const s = document.createElement(`span`)
	s.classList.add('bar-span')
	s.style.position = 'absolute'
	s.style.fontSize = '0.6rem'
	s.style.color = 'hsl(33, 100%, 98%)'
	s.style.backgroundColor = 'hsl(25, 47%, 15%)'
	s.style.borderRadius = '0.2rem'
	return s
}
const bars: NodeListOf<HTMLDivElement> = document.querySelectorAll('.bar')!
bars.forEach(bar => {
	bar.style.position = 'relative'
})
bars.forEach((bar, index) => {
	const span = createSpan()
	bar.appendChild(span)
	bar.style.textAlign = 'center'
	span.innerText = '$' + data[index].amount.toString()
})
bars.forEach(bar => {
	bar.addEventListener('mouseover', (e: MouseEvent) => {
		const barSpan: HTMLSpanElement = bar.querySelector('.bar-span')!
		barSpan.classList.add('active')
	})
	bar.addEventListener('mouseout', (e: MouseEvent) => {
		const barSpan: HTMLSpanElement = bar.querySelector('.bar-span')!
		barSpan.classList.remove('active')
	})
})

barOne.style.height = (data[0].amount * 14) / 100 + 'rem'
barTwo.style.height = (data[1].amount * 14) / 100 + 'rem'
barThree.style.height = (data[2].amount * 14) / 100 + 'rem'
barFour.style.height = (data[3].amount * 14) / 100 + 'rem'
barFive.style.height = (data[4].amount * 14) / 100 + 'rem'
barSix.style.height = (data[5].amount * 14) / 100 + 'rem'
barSeven.style.height = (data[6].amount * 14) / 100 + 'rem'

const createText = (text: string): HTMLParagraphElement => {
	const t = document.createElement(`p`)
	t.classList.add('bar-text')
	t.style.position = 'absolute'
	t.style.bottom = '-1.5rem'
	t.style.left = '0'
	t.style.right = '0'
	t.style.margin = 'auto'
	t.style.textAlign = 'center'
	t.style.fontSize = '0.6rem'
	t.style.color = 'hsl(28, 10%, 53%)'
	t.innerText = text
	return t
}

const barOneText: HTMLParagraphElement = createText(data[0].day)
barOne.append(barOneText)

const barTwoText: HTMLParagraphElement = createText(data[1].day)
barTwo.append(barTwoText)

const barThreeText: HTMLParagraphElement = createText(data[2].day)
barThree.append(barThreeText)

const barFourText: HTMLParagraphElement = createText(data[3].day)
barFour.append(barFourText)

const barFiveText: HTMLParagraphElement = createText(data[4].day)
barFive.append(barFiveText)

const barSixText: HTMLParagraphElement = createText(data[5].day)
barSix.append(barSixText)

const barSevenText: HTMLParagraphElement = createText(data[6].day)
barSeven.append(barSevenText)
