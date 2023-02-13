function createButton(text, bgColor, textColor) {
  const buttonEl = document.createElement('button')
  buttonEl.setAttribute('type', 'button')
  buttonEl.classList.add('button-center')
  if (bgColor) buttonEl.style.backgroundColor = bgColor;
  if (textColor) buttonEl.style.color = textColor;
  buttonEl.textContent = text;
  return buttonEl;
}

export { createButton as default};