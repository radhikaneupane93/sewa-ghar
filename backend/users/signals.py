from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string

from django_rest_passwordreset.signals import reset_password_token_created

from .models import CustomUser


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    :param sender: View Class that sent the signal
    :param instance: View Instance that sent the signal
    :param reset_password_token: Token Model Object
    :param args:
    :param kwargs:
    :return:
    """
    # send an e-mail to the user
    context = {
        'current_user': reset_password_token.user,
        'username': reset_password_token.user.name,
        'email': reset_password_token.user.email,
        'reset_password_url': "http://localhost:5173/ResetPassword/{}".format(reset_password_token.key)
    }

    # render email text
    email_html_message = render_to_string('email/password_reset_email.html', context)
    email_plaintext_message = render_to_string('email/password_reset_email.txt', context)

    msg = EmailMultiAlternatives(
        # title:
        "Password Reset for {title}".format(title="Sewa ghar"),
        # message:
        email_plaintext_message,
        # from:
        "freelantix@gmail.com",
        # to:
        [reset_password_token.user.email]
    )
    msg.attach_alternative(email_html_message, "text/html")
    msg.send()


from django.core.mail import send_mail
from django.conf import settings

import random
def generate_otp():
        otp = ''.join([str(random.randint(0, 9)) for _ in range(6)])
        return otp

def send_verification_otp(email):
    subject = 'Email Verification OTP'
    otp = generate_otp()
    message = f'Your OTP for email verification is: <strong>{otp}</strong>'
    email_from = settings.EMAIL_HOST
    send_mail(subject, message, email_from, [email], html_message=message)

    user = CustomUser.objects.get(email=email)
    user.otp = otp
    user.save()