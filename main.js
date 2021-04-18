const signaturePath = document.querySelector('.signature path')
const signatureOffset = anime.setDashoffset(signaturePath)

signaturePath.setAttribute('stroke-dashoffset', signatureOffset)
anime({
  targets: signaturePath,
  strokeDashoffset: [0, signatureOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})