from django.db import models
# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class userProfile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE,related_name="profile")
    description=models.TextField(blank=True,null=True)
    location=models.CharField(max_length=30,blank=True)
    date_joined=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)
    is_vendor=models.BooleanField(default=False)

    def __str__(self):
        return self.user