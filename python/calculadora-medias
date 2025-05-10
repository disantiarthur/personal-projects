aluno = "Nome do aluno"
pontos_somados = 0
notas_lancadas = 0
media_pontos = 0

while notas_lancadas < 5:
    nota = float(input(f"{notas_lancadas + 1}ª nota do {aluno}: "))
    print(f"A nota inserida foi {nota}")
    pontos_somados += nota
    notas_lancadas += 1
    media_pontos = pontos_somados / notas_lancadas
    print(f"Média até {notas_lancadas}ª nota: {media_pontos}")

print(f"Média final do {aluno}: {media_pontos}")

if media_pontos >= 6:
    print("Aluno aprovado")
else:
    print("Aluno reprovado")
