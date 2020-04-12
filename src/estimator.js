const infectionsByRequestedTime =(data, impact, severeImpact) => {

    var obj = JSON.stringify(reportedCases); 
    var currentlyInfected = obj;
    var impactInfected = Number(obj) * 50;
    var severeInfected = Number(obj) * 512;
    var data = currentlyInfected;
    var impact = impactInfected;
    var severeImpact = severeInfected;

return{ 
    data, 
    impact,
    severeImpact
 };
};

const estimateProjectedInfections = (data, impact, severeImpact)=>{
  
    var obj = JSON.stringify(reportedCases); 
    var currentlyInfected = obj;
    var impactInfected = Number(obj) * 50;
    var severeInfected = Number(obj) * 512;
    var data = currentlyInfected;
    var impact = impactInfected;
    var severeImpact = severeInfected;
  
    return{ 
        data, 
        impact,
        severeImpact
     };
    };

const severeCasesByRequestedTime = (data) => {
  var data =  Number(infectionsByRequestedTime.data) * 15 / 100;
    
    return{ 
            data
         };
        };

 const hospitalBedsByRequestedTime = (estimateBedSpaceAvailability)=>{
            return{ 
                data, 
                impact,
                severeImpact
             };
            };
        
 const estimateCasesForICU = (estimateCasesForICU)=>{
                return{ 
                    data, 
                    impact,
                    severeImpact
                 };
                };

 const estimateCasesForVentilators = (estimateCasesForICU)=>{
                    return{ 
                        data, 
                        impact,
                        severeImpact
                     };
                    };
 const estimateDollarsInFlights = (estimateCasesForICU)=>{
                        return{ 
                            data, 
                            impact,
                            severeImpact
                         };
                        };
    

const covid19ImpactEstimator = (data) => {
 const estimator = chain(

infectionsByRequestedTime,
estimateProjectedInfections,

estimateSevereCases,
estimateBedSpaceAvailability,

estimateCasesForICU,
estimateCasesForVentilators,
estimateDollarsInFlights

);

return estimator({
data,
impact: {},
severeImpact: {}

});
};

export default covid19ImpactEstimator;
