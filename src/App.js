import Socials from './components/Socials';
import {useStyles} from './styles/tooltipStyle';
function App() {
const {social, socialContainer, toolTipLeft, toolTipTop, toolTipBottom, toolTipRight} = useStyles();
  return (
    <div className={social}>
      <div className={socialContainer}>
        <Socials icon = 'bx bxl-facebook-circle' tip = '15000 +' toolTip={toolTipLeft}/>
        <Socials icon = 'bx bxl-instagram-alt' tip= '10000 +' toolTip={toolTipTop}/>
        <Socials icon = 'bx bxl-twitter' tip ='12000 +'   toolTip={toolTipBottom}/>
        <Socials icon = 'bx bxl-github' tip ='1500 +' toolTip={toolTipTop}/>
        <Socials icon = 'bx bxl-discord' tip ='800 +' toolTip={toolTipRight}/>
      </div>
    </div>
  );
}

export default App;
