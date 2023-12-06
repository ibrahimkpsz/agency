import React from 'react'
import FAQImage from '../assets/images/faq.svg'

function FAQ() {
  return (
    <div className='container text-center' id='faq'>
        <img src={FAQImage} className='' alt="" />
        <h3 className='faq-header'>Sık Sorulan Sorular</h3>
        <div class="accordion mt-5" id="faq-accordion">
            <div className="row row-cols-lg-2 row-cols-1 text-start">
                <div className="col">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-1" aria-expanded="true" aria-controls="faq-1">
                                Web siteleri mobil ile uyumlu mu?
                            </button>
                        </h2>
                        <div id="faq-1" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                Evet, web sitelerimiz mobil cihazlarla tam uyumludur. Kullanıcılarımız, telefon veya tablet gibi mobil cihazlardan web sitemize rahatlıkla erişebilir ve içerikleri sorunsuz bir şekilde görüntüleyebilirler.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-2" aria-expanded="true" aria-controls="faq-2">
                                Web siteleri mobil ile uyumlu mu?
                            </button>
                        </h2>
                        <div id="faq-2" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                Evet, web sitelerimiz mobil cihazlarla tam uyumludur. Kullanıcılarımız, telefon veya tablet gibi mobil cihazlardan web sitemize rahatlıkla erişebilir ve içerikleri sorunsuz bir şekilde görüntüleyebilirler.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-3" aria-expanded="true" aria-controls="faq-3">
                                Web siteleri mobil ile uyumlu mu?
                            </button>
                        </h2>
                        <div id="faq-3" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                Evet, web sitelerimiz mobil cihazlarla tam uyumludur. Kullanıcılarımız, telefon veya tablet gibi mobil cihazlardan web sitemize rahatlıkla erişebilir ve içerikleri sorunsuz bir şekilde görüntüleyebilirler.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-4" aria-expanded="true" aria-controls="faq-4">
                                Web siteleri mobil ile uyumlu mu?
                            </button>
                        </h2>
                        <div id="faq-4" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                            <div class="accordion-body">
                                Evet, web sitelerimiz mobil cihazlarla tam uyumludur. Kullanıcılarımız, telefon veya tablet gibi mobil cihazlardan web sitemize rahatlıkla erişebilir ve içerikleri sorunsuz bir şekilde görüntüleyebilirler.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQ