import type { Express } from 'express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

function setupCors(e: Express): Express {
	return e.use(cors());
}

function setupBodyParser(e: Express): Express {
	return e.use(express.json()).use(
		express.urlencoded({
			extended: true,
		}),
	);
}

function setupMorgan(e: Express): Express {
	return e.use(morgan('tiny'));
}

function setupSampleRoutes(e: Express): Express {
	return e.get('/', (_req, res) => {
		res.json({ hello: 'world' });
	});
}

export const app = [setupCors, setupBodyParser, setupMorgan, setupSampleRoutes].reduce(
	(e, middleware) => middleware(e),
	express(),
);
