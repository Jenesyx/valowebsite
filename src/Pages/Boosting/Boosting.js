import React, { useState, useEffect } from 'react'
import './Boosting.css'
import rankData from '../../Data/ranking'
import Header from '../../Components/Header/Header'
import ShoppingBag from '../../Images/Shopping_Bag_02.png'


function Boosting() {

    const [currentRank, setCurrentRank] = useState(rankData.ranks[0]);
    const [currentStage, setCurrentStage] = useState(rankData.ranks[0].stages[0]);
    const [currentRR, setCurrentRR] = useState(rankData.ranks[0].stages[0].rr[0]);
    const [desiredRank, setDesiredRank] = useState(rankData.ranks[0]);
    const [desiredStage, setDesiredStage] = useState(rankData.ranks[0].stages[0]);
    const [desiredRR, setDesiredRR] = useState(rankData.ranks[0].stages[0].rr[0]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPriceOff, setTotalPriceOff] = useState(0);
    const [playWithYou, setPlayWithYou] = useState(false)
    const [stream, setStream] = useState(false)
    const [playPrice, setPlayPrice] = useState(0)
    const [streamPrice, setStreamPrice] = useState(0)

    function calculatePrice() {
        try {
            const rankPrices = {
                Bronze: { basePrice: 5, rrIncrement: [1] },
                Silver: { basePrice: 10, rrIncrement: [2] },
                Gold: { basePrice: 15, rrIncrement: [4] },
                Platinum: { basePrice: 20, rrIncrement: [6] },
                Diamond: { basePrice: 30, rrIncrement: [10, 12, 14] },
                Ascendant: { basePrice: 40, rrIncrement: [15, 20, 25] },
                Immortal: { basePrice: 45, rrIncrement: [15, 20, 25, 30] }
            };
    
            const currentIdx = rankData.ranks.findIndex(rank => rank.name === currentRank.name);
            const desiredIdx = rankData.ranks.findIndex(rank => rank.name === desiredRank.name);
    
            if (currentIdx === -1 || desiredIdx === -1) throw new Error("Rank index not found.");
    
            let totalCost = 0;
    
            for (let i = currentIdx; i <= desiredIdx; i++) {
                const rank = rankData.ranks[i];
                const stages = rank.stages;
                const rrIncrements = rankPrices[rank.name].rrIncrement;
    
                const startStage = (i === currentIdx) ? stages.findIndex(stage => stage.stage === currentStage.stage) : 0;
                const endStage = (i === desiredIdx) ? stages.findIndex(stage => stage.stage === desiredStage.stage) : stages.length - 1;
    
                for (let j = startStage; j <= endStage; j++) {
                    const stage = stages[j];
                    const rrIncrement = rrIncrements[Math.min(j, rrIncrements.length - 1)];
                    
                    if (i === currentIdx && j === startStage) {
                        const currentRRIndex = stage.rr.indexOf(currentRR);
                        const desiredRRIndex = (i === desiredIdx && j === endStage) ? stage.rr.indexOf(desiredRR) : stage.rr.length - 1;
                        totalCost += Math.abs(desiredRRIndex - currentRRIndex) * rrIncrement;
                    } else {
                        const rrCount = (i === desiredIdx && j === endStage) ? stage.rr.indexOf(desiredRR) + 1 : stage.rr.length;
                        totalCost += rrCount * rrIncrement;
                    }
                }
            }
    
            console.log(`Total cost calculated: ${totalCost}`);
            return totalCost;
        } catch (error) {
            console.error('Error calculating price:', error);
            return NaN;
        }
    }
    

    const handlePlayWU = () => {
        setPlayWithYou(!playWithYou)
    }

    const handleStream = () => {
        setStream(!stream)
    }

    useEffect(() => {
        const basePrice = calculatePrice();
        let additionalCosts = 0;

        if(basePrice > 1){
            if (playWithYou) {
                additionalCosts += 10;
            }
            if (stream) {
                additionalCosts += 5;
            }
        }
    
        const totalPriceIncludingExtras = basePrice + additionalCosts;
    
        const finalPrice = totalPriceIncludingExtras * 1.2; 
        const formattedFinalPrice = finalPrice.toFixed(1); 
    
        setTotalPrice(totalPriceIncludingExtras);
        setTotalPriceOff(formattedFinalPrice);
    }, [currentRank, desiredRank, currentStage, desiredStage, currentRR, desiredRR, playWithYou, stream]);
    

    const handleCurrentRankChange = (event) => {
        const rankName = event.target.value;
        const selectedRank = rankData.ranks.find(rank => rank.name === rankName);
        setCurrentRank(selectedRank);
        setCurrentStage(selectedRank.stages[0]);
        setCurrentRR(selectedRank.stages[0].rr[0]);
        updateDesiredOptions(selectedRank, selectedRank.stages[0], selectedRank.stages[0].rr[0]);
    };

    const handleDesiredRankChange = (event) => {
        const rankName = event.target.value;
        const selectedRank = rankData.ranks.find(rank => rank.name === rankName);
        setDesiredRank(selectedRank);
        setDesiredStage(selectedRank.stages[0]);
        setDesiredRR(selectedRank.stages[0].rr[0]);
    };

    const handleStageChange = (event) => {
        const stageName = event.target.value;
        const selectedStage = currentRank.stages.find(stage => stage.stage === stageName);
        setCurrentStage(selectedStage);
        setCurrentRR(selectedStage.rr[0]);
    };

    const handleDesiredStageChange = (event) => {
        const stageValue = event.target.value;
        const selectedStage = desiredRank.stages.find(stage => stage.stage === stageValue);
        setDesiredStage(selectedStage);
        if (desiredRank === currentRank && selectedStage.stage === currentStage.stage) {
            const validRRs = selectedStage.rr.filter(rr => parseInt(rr.split('-')[0]) >= parseInt(currentRR.split('-')[0]));
            setDesiredRR(validRRs.length > 0 ? validRRs[0] : selectedStage.rr[0]);
        } else {
            setDesiredRR(selectedStage.rr[0]);
        }
    };
    

    const handleDesiredRRChange = (event) => {
        setDesiredRR(event.target.value);
    }

    const updateDesiredOptions = (rank, stage, rr) => {
        setDesiredRank(rank);
        setDesiredStage(stage);
        setDesiredRR(rr);
    };

    const handleRRChange = (event) => {
        setCurrentRR(event.target.value);
    }

    return (
        <>
            <div className="child-h-holder">
                <Header showSlider={false}/>
            </div>
            <p className='Boosting-main-title'>Valorant&nbsp;&nbsp;<span>\\</span>&nbsp;&nbsp;Boosting&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;.&nbsp;&nbsp;.</p>
            <div className="current-desire-rank">
                <div className="current-rank">
                    <p className='current-rank-title'>Current Rank</p> 
                    <div className="choose-rank">
                        <div className='image-holder'>
                            <img src={currentStage.image} alt={currentStage.stage} />
                        </div>
                        <select className='same-select' value={currentRank.name} onChange={handleCurrentRankChange}>
                            {rankData.ranks.map(rank => <option key={rank.name} value={rank.name}>{rank.name}</option>)}
                        </select>
                    </div>
                    <div className="c--choose-stage">
                        <select className='choose-stage' value={currentStage.stage} onChange={handleStageChange}>
                            {currentRank.stages.map(stage => <option key={stage.stage} value={stage.stage}>{stage.stage}</option>)}
                        </select>
                        <select className='same-select' value={currentRR} onChange={handleRRChange}>
                            {currentStage.rr.map(rr => <option key={rr} value={rr}>{rr}</option>)}
                        </select>
                    </div>
                </div>
                <div className="desire-rank">
                    <p className='desire-rank-title'>Desiret Rank</p>
                    <div className="choose-rank">
                        <div className='image-holder'>
                            <img src={desiredStage.image} alt={desiredStage.stage} />
                        </div>
                        <select className='same-select' value={desiredRank.name} onChange={handleDesiredRankChange}>
                            {rankData.ranks.filter(r => r.id >= currentRank.id).map(rank => (
                                <option key={rank.name} value={rank.name}>{rank.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="c--choose-stage">
                    <select className='choose-stage' value={desiredStage.stage} onChange={handleDesiredStageChange}
                        disabled={desiredRank !== currentRank && desiredRank.stages.length === 0}>
                        {desiredRank.stages
                            .filter(stage => 
                                desiredRank === currentRank ? currentRank.stages.indexOf(stage) >= currentRank.stages.indexOf(currentStage) : true
                            )
                            .map(stage => <option key={stage.stage} value={stage.stage}>{stage.stage}</option>)
                        }
                    </select>
                    <select className='same-select' value={desiredRR} onChange={handleDesiredRRChange}
                        disabled={desiredRank === currentRank && desiredStage === currentStage && desiredStage.rr.length === 1}>
                        {desiredStage.rr
                            .filter(rr => 
                                desiredRank === currentRank && desiredStage === currentStage ?
                                parseInt(rr.split('-')[0]) >= parseInt(currentRR.split('-')[0]) : true
                            )
                            .map(rr => <option key={rr} value={rr}>{rr}</option>)
                        }
                    </select>
                    </div>
                </div>
            </div>
            <div className="checkout">
                <div className="extra-features">
                    <div className={`playwithyou ${playWithYou ? 'active' : ''}`} onClick={handlePlayWU}><p>Play with you</p></div>
                    <div className={`stream ${stream ? 'active' : ''}`} onClick={handleStream}><p>Stream</p></div>
                </div>
                <div className="pay-coupon">
                    <p className='checkout-title'>Total Amount</p>
                    <div className="total-amount">
                        <p className='sub-total'>{totalPrice}$</p>
                        <p className='without-discount'>{totalPriceOff}$</p>
                    </div>
                    <div className="coupon">
                        <input type="text" />
                        <div className="rmv-coupon">Remove Coupon</div>
                    </div>
                    <div className="checkout-btn">
                        <p>Checkout</p>
                        <div className="shoppingbag-holder">
                            <img src={ShoppingBag} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Boosting