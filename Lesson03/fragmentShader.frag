#version 330 core

in vec2 TexCoord;
//in vec3 planeColor;
out vec4 FragColor;

// Texture samplers
uniform sampler2D ourTexture;
//uniform vec3 color;
uniform bool isCube;

void main()
{
    FragColor = texture(ourTexture, TexCoord) * (isCube?vec4(252/255.0f, 148/255.0f, 3/255.0f,1):vec4(102/255.0f, 255/255.0f, 247/255.0f,1));//* vec4(color, 1);
}