import express from 'express';
import {
  changeContent,
  create,
  update,
  deletePageRecord,
  details,
  list,
  loadContent,
  copiedPagecreate,
} from './page.controller';

const pageRoute = express.Router();
pageRoute.post('/', create);
pageRoute.post('/copied-page', copiedPagecreate);
pageRoute.post('/:pageId/content', changeContent);

pageRoute.put('/:pageId', update);

pageRoute.delete('/:pageId', deletePageRecord);

pageRoute.get('/:pageId', details);
pageRoute.get('/', list);
pageRoute.get('/:pageId/content', loadContent);

export default pageRoute;
