import React from 'react'
import { IconContext } from 'react-icons/lib'
import { PricingCard, PricingContainer, PricingCradInfo, PricingSection, PricingWrapper, PricingCardIcon, PricingCardPlan, PricingCardCost, PricingCardLength, PricingCardFeatures, PricingCardFeature, PricingHeading } from './Pricing.elements'
import {GiRock, GiCrystalBars, GiCutDiamond} from 'react-icons/gi'
import {Button} from '../../globalStyles'


const Pricing = () => {
  return (
    <IconContext.Provider value={{color: '#a9b3c1', size: 64}}>
      <PricingSection>
        <PricingWrapper>
            <PricingHeading>Our Services</PricingHeading>
            <PricingContainer>
                <PricingCard to='sign-up'>
                    <PricingCradInfo>
                        <PricingCardIcon>
                            <GiRock/>
                        </PricingCardIcon>
                        <PricingCardPlan>StarterPack</PricingCardPlan>
                        <PricingCardCost>$99.99</PricingCardCost>
                        <PricingCardLength>per month</PricingCardLength>
                        <PricingCardFeatures>
                            <PricingCardFeature>100 New Users</PricingCardFeature>
                            <PricingCardFeature>10,000 Budget</PricingCardFeature>
                            <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                        </PricingCardFeatures>
                        <Button primary>Choose Plan</Button>
                    </PricingCradInfo>
                </PricingCard>
                <PricingCard to='sign-up'>
                    <PricingCradInfo>
                        <PricingCardIcon>
                            <GiCrystalBars/>
                        </PricingCardIcon>
                        <PricingCardPlan>Gold Rush</PricingCardPlan>
                        <PricingCardCost>$299.99</PricingCardCost>
                        <PricingCardLength>per month</PricingCardLength>
                        <PricingCardFeatures>
                            <PricingCardFeature>10,000 Users</PricingCardFeature>
                            <PricingCardFeature>50,000 Budget</PricingCardFeature>
                            <PricingCardFeature>Lead Gen analytics</PricingCardFeature>
                        </PricingCardFeatures>
                        <Button primary>Choose Plan</Button>
                    </PricingCradInfo>
                </PricingCard>
                <PricingCard to='sign-up'>
                    <PricingCradInfo>
                        <PricingCardIcon>
                            <GiCutDiamond/>
                        </PricingCardIcon>
                        <PricingCardPlan>Diamond Kings</PricingCardPlan>
                        <PricingCardCost>$999.99</PricingCardCost>
                        <PricingCardLength>per month</PricingCardLength>
                        <PricingCardFeatures>
                            <PricingCardFeature>Unlimited Users</PricingCardFeature>
                            <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                            <PricingCardFeature>24/7 Supports</PricingCardFeature>
                        </PricingCardFeatures>
                        <Button primary>Choose Plan</Button>
                    </PricingCradInfo>
                </PricingCard>
            </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  )
}

export default Pricing
