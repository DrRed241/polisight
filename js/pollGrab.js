var dataset;
function initPoll(id, callback=function(e) {}) {
	$.ajax({
        type: "GET",
	    url: "https://projects.fivethirtyeight.com/polls-page/data/"+id+"_polls.csv",
	    success: function(data, status) {
	    	dataset = data
	    	callback(data)
	    }
	});
}

function getLatestPoll(data=dataset) {
	//REQUIRES POLL INIT
	a = data.split("\n")
	z = []
	for (i in a) {
		z.push(a[i].split(","))
	}
	r = []
	for (i in z) {
		if (i > 1) {
			if (z[i-1][0] == z[i][0]) {
				r.push(z[i])
			} else {
				break
			}
		} else if (i == 1) {
			r.push(z[i])
		}
	}
	return r
}