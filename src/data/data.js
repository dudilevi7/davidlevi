import Work from "../model/Work";
import israellogo from '../imgs/works/israellogo.png';
import osilogo from '../imgs/works/osilogo.png';   
import wtflogo from '../imgs/works/wtflogo.png';
import ynlogo from '../imgs/works/yournewslogo.png';
import israelscreen from '../imgs/works/israelscreen.png';
import ynscreen from '../imgs/works/ynscreen.png';
import osiscreen from '../imgs/works/osiscreen.png';
import wtfscreen from '../imgs/works/wtfscreen.png';

export const enWorks = [
    new Work('Proffesional landing page',
    'Israel Meir - plumbing service',
    'Web app adjust for independent professionals jobs with emphasis on accessibility, visibilty and transparency ',
    '11/2020',['Front End','React','Hooks','Material-UI','styled-components','npm libraries','Mobile display'],
    'http://israelmeir.000webhostapp.com/',israelscreen,israellogo)
    ,
    new Work('Information web',
    'Open Source Ideas',
    "That's app display original development ideas from GitHub by tags sorting , async titles search and order by trending issues . The app also pulling the comments of every issues",
    '04/2020',['Front End','React','Bootstrap','npm libraries','GitHub API','JSON','Mobile display'],
    'https://dudilevi7.github.io/open_source_ideas/',osiscreen,osilogo)
    ,
    new Work('LIVE Data web',
    'Your News - LIVE Web app',
    "A live news app that allows the user to determine the specific category to read , weather system by location and search. In addition there's COVID-19 special mode",
    '01-04/2020',['Full Stack','React','Node.js','Redux','Hooks','Bootstrap','PostgreSQL','npm libraries','JSON','Mobile display'],
    'https://dudilevi7.github.io/yournews/',ynscreen,ynlogo)
    ,
    new Work('Game web app',
    "Who's that famous? ",
    'My first work with React . An amazing quiz with special questions about famous people.',
    '12/2019',['Front End','React','Bootstrap','npm libraries','Multi-Language'],
    'https://dudilevi7.github.io/whosthatfamous/',wtfscreen,wtflogo)
]

export const hebWorks = [
    new Work('דף נחיתה מקצועי',
    'ישראל שלום - שירותי אינסטלציה',
    'אתר בהתאמה אישית לבעלי מקצוע עם דגש על נגישות , נראות  ושקיפות ',
    '11/2020',['צד לקוח','React','Hooks','Material-UI','styled-components','npm libraries','תצוגת נייד'],
    'http://israelmeir.000webhostapp.com/',israelscreen,israellogo)
    ,
    new Work('אתר מידע',
    'Open Source Ideas -  רעיונות קוד פתוח',
    "האפליקציה מציגה רעיונות תכנות מקוריים מאתר המפתחים 'גיטהאב' על ידי מיון לפי תגיות , חיפוש סנכרוני עם השלמה אוטומטית , וסידור עפ''י רעיונות טרנדיים. האפליקציה מציגה גם את התגובות לכל רעיון",
    '04/2020',['צד לקוח','React','Bootstrap','npm libraries','GitHub API','JSON','תצוגת נייד'],
    'https://dudilevi7.github.io/open_source_ideas/',osiscreen,osilogo)
    ,
    new Work('אתר נתונים בזמן אמת',
    'Your News - חדשות בזמן אמת',
    "אתר אקטואליה המתעדכן בזמן אמת ומאפשר לבחור קטגוריה ספציפית לקריאה , עם מערכת מזג האוויר לפי מיקום ולפי חיפוש , האתר כולל מצב קורונה בעולם ובישראל",
    '01-04/2020',['צד לקוח וצד שרת','React','Node.js','Redux','Hooks','Bootstrap','PostgreSQL','npm libraries','JSON',' תצוגת נייד'],
    'https://dudilevi7.github.io/yournews/',ynscreen,ynlogo)
    ,
    new Work('אתר משחק',
    "Who's that famous? אפליקציית ",
    'משחק חידון עם שאלות מיוחדות על אנשים מפורסמים',
    '12/2019',['צד לקוח','React','Bootstrap','npm libraries','תמיכה בעברית ואנגלית'],
    'https://dudilevi7.github.io/whosthatfamous/',wtfscreen,wtflogo)
]