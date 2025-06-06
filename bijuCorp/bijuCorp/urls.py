"""
URL configuration for bijuCorp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from . import views
# from django.conf.urls.static import static  : To load the static file at production leve
from . import settings 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('home/', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('skills/', views.skills, name='skills'),
    path('docs/', views.docs, name='docs'),
    path('contact/', views.contact, name='contact'),
    path('skills/<str:topic>/', views.skill_detail, name='skill_detail'),
]
# urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0]) : To load the static file at production leve