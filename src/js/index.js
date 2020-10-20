import './core/polyfill';
import { boot } from './core/boot';
import { Anchor } from './anchor';
import './main';

boot.init([
	// module
	{ module: Anchor }
]);
