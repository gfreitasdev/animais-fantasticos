import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';




const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('.js-accordion dt')
accordion.init();

const tabNav = new TabNav('.js-tabmenu li', '.js-tabcontent section');
tabNav.init();


initModal()
initTooltip()
initDropDownMenu()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
initAnimacaoScroll()

