import Bronze1 from '../Images/Bronze1.png';
import Bronze2 from '../Images/Bronze2.png';
import Bronze3 from '../Images/Bronze3.png';
import Silver1 from '../Images/Silver1.png';
import Silver2 from '../Images/Silver2.png';
import Silver3 from '../Images/Silver3.png';
import Gold1 from '../Images/Gold1.png';
import Gold2 from '../Images/Gold2.png';
import Gold3 from '../Images/Gold3.png';
import Platinum1 from '../Images/Platinum1.png';
import Platinum2 from '../Images/Platinum2.png';
import Platinum3 from '../Images/Platinum3.png';
import Diamond1 from '../Images/Diamond1.png';
import Diamond2 from '../Images/Diamond2.png';
import Diamond3 from '../Images/Diamond3.png';
import Ascendant1 from '../Images/Ascendant1.png';
import Ascendant2 from '../Images/Ascendant2.png';
import Ascendant3 from '../Images/Ascendant3.png';
import Immortal1 from '../Images/Immortal1.png';
import Immortal2 from '../Images/Immortal2.png';
import Immortal3 from '../Images/Immortal3.png';

const rankData = {
    ranks: [
        { 
            id: 1, 
            name: 'Bronze', 
            stages: [
                { stage: 'I', image: Bronze1, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'II', image: Bronze2, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'III', image: Bronze3, rr: ['1-25', '26-50', '51-75', '76-100'] }
            ]
        },
        { 
            id: 2, 
            name: 'Silver', 
            stages: [
                { stage: 'I', image: Silver1, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'II', image: Silver2, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'III', image: Silver3, rr: ['1-25', '26-50', '51-75', '76-100'] }
            ]
        },
        { 
            id: 3, 
            name: 'Gold', 
            stages: [
                { stage: 'I', image: Gold1, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'II', image: Gold2, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'III', image: Gold3, rr: ['1-25', '26-50', '51-75', '76-100'] }
            ]
        },
        { 
            id: 4, 
            name: 'Platinum', 
            stages: [
                { stage: 'I', image: Platinum1, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'II', image: Platinum2, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'III', image: Platinum3, rr: ['1-25', '26-50', '51-75', '76-100'] }
            ]
        },
        { 
            id: 5, 
            name: 'Diamond', 
            stages: [
                { stage: 'I', image: Diamond1, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'II', image: Diamond2, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'III', image: Diamond3, rr: ['1-25', '26-50', '51-75', '76-100'] }
            ]
        },
        { 
            id: 6, 
            name: 'Ascendant', 
            stages: [
                { stage: 'I', image: Ascendant1, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'II', image: Ascendant2, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'III', image: Ascendant3, rr: ['1-25', '26-50', '51-75', '76-100'] }
            ]
        },
        { 
            id: 7, 
            name: 'Immortal', 
            stages: [
                { stage: 'I', image: Immortal1, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'II', image: Immortal2, rr: ['1-25', '26-50', '51-75', '76-100'] },
                { stage: 'III', image: Immortal3, rr: ['1-25', '26-50', '51-75', '76-100', '101-125', '126-150', '151-175', '176-200', '201-250', '251-300', '301-350', '351-400'] }
            ]
        }
    ]
};

export default rankData