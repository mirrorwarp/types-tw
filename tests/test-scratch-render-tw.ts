import RenderWebGL from 'scratch-render';

RenderWebGL.powerPreference = 'high-performance';

const renderer = new RenderWebGL(document.createElement('canvas'));
renderer.dirty = true;
