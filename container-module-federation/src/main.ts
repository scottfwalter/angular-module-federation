console.log('main.ts fired');
import('./bootstrap')
	.catch(err => console.error('OOPS', err));

	// import { loadRemoteEntry } from '@angular-architects/module-federation';
	// Promise.all([
	//    loadRemoteEntry('http://localhost:4201/remoteEntry.js', 'mfe1')
	// ])
	// .catch(err => console.error('Error loading remote entries', err))
	// .then(() => {
	// 	console.log('about to import');
	// 	import('./bootstrap');
	// })
	// .catch(err => console.error(err));
