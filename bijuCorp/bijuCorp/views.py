from django.shortcuts import render

def home(request):
    return render(request, 'apps/home.html')

# def home(request):
#     return render(request, 'base.html')

def about(request):
    return render(request, 'apps/home.html')

def skills(request):
    return render(request, 'apps/skills.html')

def skill_detail(request, topic):
    return render(request, 'apps/skill_detail.html', {'topic': topic})

def docs(request):
    return render(request, 'apps/docs.html')

def contact(request):
    return render(request, 'apps/contact.html')
