from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Category(models.Model):
    name =models.CharField(max_length=255, db_index=True, unique=True)
    
    class Meta:
        verbose_name_plural = 'categories'
    def __str__(self):
        return self.name


class Post(models.Model):
    category = models.ForeignKey(Category, related_name='post',on_delete=models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE,related_name='product_creator')
    title = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    last_date = models.DateTimeField()
    link = models.URLField(max_length=500)
    image = models.ImageField(upload_to='image/')
    eligibility = models.CharField(max_length=300)
    company = models.CharField(max_length=255)
    description = models.TextField()

    class Meta:
        verbose_name_plural = 'products'
        
    def __str__(self):
        return self.title
