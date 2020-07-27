# Generated by Django 3.0.8 on 2020-07-27 03:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0010_opportunity_skills'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=1000)),
                ('desc', models.TextField(blank=True, null=True)),
                ('skills', models.ManyToManyField(blank=True, to='person.Skill')),
            ],
        ),
    ]