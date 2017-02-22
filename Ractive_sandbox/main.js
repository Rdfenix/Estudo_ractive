var Jobs = Ractive.extend({
	template: '#jobs',
	isolated: true,
	oninit: function () {
		this.on('addJob', function () {

			var newJob = {
				company: this.get('jobCompany'),
				title: this.get('jobTitle'),
				years: this.get('jobYears')
			}
			this.push('jobs', newJob);

			this.set('jobCompany', '');
			this.set('jobTitle', '');
			this.set('jobYears', '');

			return false;
		});
	},
	data: function () {
		return {
			jobs: [{
					company: '123 Web Design',
					title: 'Senior Web Developer',
					years: 3
				},
				{
					company: 'Traversy Media',
					title: 'Web/Graphic Designer',
					years: 4
				},
				{
					company: 'Tech Guy',
					title: 'Web Programer',
					years: 5
				},
				{
					company: 'Eduonix',
					title: 'Web Instructor',
					years: 5
				}
			],
			jobCompany: '',
			jobTitle: '',
			jobYears: ''
		};
	}
});


var ractive = new Ractive({
	el: '#app',
	template: '#template',
	components: {
		jobs: Jobs
	},
	data: {
		greeting: 'Hello World',
		name: 'Rudnei',
		address: {
			street: 'Rua Papa Sao Dionisio',
			city: 'Campinas',
			state: 'SP'
		},
		friends: [{
				name: 'Marcelo',
				age: 26
			},
			{
				name: 'Willian',
				age: 28
			},
			{
				name: 'Lucas',
				age: 22
			}
		],
		showAddress: false
	}
});

ractive.on('showAddress', function () {
	ractive.toggle('showAddress');
});

/*ractive.push('jobs', {
	company: 'Test Company',
	title: 'Lead Developer',
	years: 2
});*/
