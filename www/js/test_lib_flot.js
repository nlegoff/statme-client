function test_lib_flot() {
    var d1 = [];
    for (var i = 0; i < 14; i += 0.5)
        d1.push([i, Math.sin(i)]);
    var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
    var d3 = [[0, 12], [7, 12], null, [7, 2.5], [12, 2.5]];
    
    var data = [  
                {  
                    label: "Moi",  
                    data: [[7, 4],  
                        [6, 2],  
                        [5, 14],  
                        [4, 6],  
                        [3, 9],  
                        [2, 4],
            			[1, 3]] 
                },
                {  
                    label: "My Friends",//Mettre le nom de mon ami  
                    data: [[7, 4],  
                        [6, 2],  
                        [5, 14],  
                        [4, 6],  
                        [3, 9],  
                        [2, 4],
            			[1, 3]]  
                }
            ];
    
    var options = {  
    	    legend: {  
    	        show: false,  
    	        margin: 10,  
    	        backgroundOpacity: 0.5  
    	    },
    	    xaxis: {
    	    	ticks: [[0,''],[1,'Mo'],[2,'Tu'],[3,'We'],[4,'Th'],[5,'Fr'],[6,'Sa'],[7,'Su']]
    	    }
    	}; 
    
    //$.plot($("#contentConfigurationChart"), data, options);
}